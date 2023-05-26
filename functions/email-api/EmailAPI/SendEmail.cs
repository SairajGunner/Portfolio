using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;
using SendGrid;

namespace EmailAPI
{
    public static class SendEmail
    {
        [FunctionName("SendEmail")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("SendEmail function has been triggered.");
            Console.WriteLine("SendEmail function has been triggered.");

            string content = await new StreamReader(req.Body).ReadToEndAsync();

            SendGridMessage message = JsonConvert.DeserializeObject<SendGridMessage>(content);

            message.Personalizations.ForEach((personalization) =>
            {
                personalization.From.Email = Environment.GetEnvironmentVariable("Default_Email");

                if (!personalization.Bccs.Any((bcc) => bcc.Email == Environment.GetEnvironmentVariable("Owner_Email")))
                {
                    personalization.Bccs.Add(new EmailAddress()
                    {
                        Email = Environment.GetEnvironmentVariable("Owner_Email")
                    });
                }
            });

            message.Contents.ForEach(content =>
            {
                content.Value += $"\nSent by {message.From.Email}";
            });

            message.SetFrom(Environment.GetEnvironmentVariable("Default_Email"));

            string apiKey = Environment.GetEnvironmentVariable("SendGrid_APIKey");

            SendGridClient client = new SendGridClient(apiKey);

            Response response = await client.SendEmailAsync(message).ConfigureAwait(false);

            string responseMessage = response.IsSuccessStatusCode ? response.StatusCode.ToString() : await new StreamReader(response.Body.ReadAsStream()).ReadToEndAsync();

            log.LogInformation(responseMessage);

            Console.WriteLine(responseMessage);
            Console.WriteLine(response.Body.ReadAsStringAsync().Result);

            return new OkObjectResult(response);
        }
    }
}
