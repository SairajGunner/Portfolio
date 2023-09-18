import { Component } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import DetailHolder from "../shared/detail-holder/DetailHolder";
import "./Experience.scss";

export default class Experience extends Component {
  experienceTypes = [
    {
      image: "/images/Work.png",
      altText: "Work",
      description: "Work"
    },
    {
      image: "/images/Projects.png",
      altText: "Projects",
      description: "Personal Projects"
    },
    {
      image: "/images/Study.png",
      altText: "Study",
      description: "Study"
    }
  ];

  experienceDetails = [
    {
      type: "Work",
      experiences: [
        {
          name: "Research Assistant",
          institution: "Durham College",
          location: "Oshawa, ON, Canada",
          duration: "Oct 2022 - Present",
          load: "Part-Time (Contract)",
          favorites: [
            {
              name: "Game Analytics"
            },
            {
              name: "Game Development"
            },
            {
              name: "Software Programming"
            },
            {
              name: "Virtual Reality"
            }
          ],
          logo: "/images/DCLogo.jpg",
          altText: "Durham College",
          roles: [
            "Software Programmer",
            "Game Developer",
            "Game Analytics Developer"
          ],
          responsibilities: [
            "Incorporating analytics into a game to analyze player interaction",
            "Developing a virtual-reality based security application",
            "Researching various technical implementation options",
            "Supporting projects that require programming in C#"
          ],
          achievements: [
            "Incorporated networking for multiplayer gaming in virtual reality"
          ]
        },
        {
          name: "Associate Consultant, Senior Software Engineer",
          institution: "Capgemini",
          location: "Navi Mumbai, MH, India",
          duration: "Oct 2017 - Aug 2022",
          load: "Full-Time",
          favorites: [
            {
              name: "Cloud Computing"
            },
            {
              name: "Web Development"
            },
            {
              name: "Software Programming"
            },
            {
              name: "Solution Designing"
            }
          ],
          logo: "/images/CGLogo.jpg",
          altText: "Capgemini",
          roles: [
            "Software Engineer",
            "Full-stack Web Developer",
            "Cloud Infrastructure Engineer",
            "Cloud Migration Lead"
          ],
          responsibilities: [
            "Understanding user requirements and designing technical solutions",
            "Writing, reviewing and unit-testing code for new product development",
            "Conducting impact-analysis of code change to other parts and connected systems",
            "Technically leading projects based on migrating web applications to the cloud",
            "Coordinating with various technical teams, business teams and other stakeholders",
            "Documenting work done and changes made to new and in-use applications"
          ],
          achievements: [
            "Led the migration of 100+ on-premises applications to Azure PaaS and IaaS",
            "Delivered complex functionalities, end-to-end, in web applications",
            "Awarded with the highest performance rating band for 3 out of 4 complete years with Capgemini",
            "Awarded with stock options on the basis of performance",
            "Awarded short- and long-term retention bonus",
            'Awarded "Capgemini - Rising Star" Certificate'
          ]
        }
      ]
    },
    {
      type: "Personal Projects",
      experiences: [
        {
          name: "The Ultimate Goal Tracker",
          institution: "Self",
          location: "Home",
          duration: "Aug 2023 - Present",
          load: "Casual",
          favorites: [
            {
              name: "Angular 16"
            },
            {
              name: "Node JS"
            },
            {
              name: "MongoDB"
            }
          ],
          logo: "/images/diamond.ico",
          altText: "Goal Tracker Logo",
          roles: [
            "Full-stack Developer",
            "Solution Architect",
            "UI / UX Designer"
          ],
          responsibilities: [],
          achievements: [],
          links: [
            {
              href: "https://github.com/SairajGunner/goal-tracker",
              label: "GitHub"
            }
          ]
        },
        {
          name: "Web Developer",
          institution: "Self",
          location: "Home",
          duration: "Dec 2022 - Feb 2023",
          load: "Casual",
          favorites: [
            {
              name: "React"
            },
            {
              name: "JavaScript"
            },
            {
              name: "Azure Hosting"
            },
            {
              name: "DNS & Networking"
            }
          ],
          logo: "/images/Self.jpg",
          altText: "self.js",
          roles: ["Front-end Developer", "UI / UX Designer"],
          responsibilities: [],
          achievements: [],
          links: [
            {
              href: "https://github.com/SairajGunner/Portfolio",
              label: "GitHub"
            }
          ]
        },
        {
          name: "3D WebGL Developer",
          institution: "Self",
          location: "Home",
          duration: "April 2022 - July 2022",
          load: "Casual",
          favorites: [
            {
              name: "3D Animation"
            },
            {
              name: "WebGL"
            },
            {
              name: "Shaders and Rendering"
            },
            {
              name: "JS Physics Libraries"
            }
          ],
          logo: "/images/threejs.png",
          altText: "three.js",
          roles: ["3D Animation Programmer", "Research and Developer"],
          responsibilities: [],
          achievements: [
            "Incorporated networking for multiplayer gaming in virtual reality"
          ],
          links: [
            {
              href: "https://github.com/SairajGunner/webgl-animation",
              label: "GitHub"
            },
            {
              href: "https://sairaj.psymj.com/threejs",
              label: "Work"
            }
          ]
        }
      ]
    },
    {
      type: "Study",
      experiences: [
        {
          name: "Data Analytics Student",
          institution: "Durham College",
          location: "Oshawa, ON, Canada",
          duration: "Sep 2022 - Dec 2022",
          load: "Casual",
          favorites: [
            {
              name: "HDFS"
            },
            {
              name: "Spark Streaming"
            },
            {
              name: "Flume"
            },
            {
              name: "Kafka"
            }
          ],
          logo: "/images/DCLogo.jpg",
          altText: "Durham College",
          roles: ["ETL Engineer", "Big Data Engineer"],
          responsibilities: [],
          achievements: [
            "Auto-written files written to HDFS using Flume",
            "Logical segregattion of input using Spark Streaming",
            "Population of messages on Kafka consumers on the basis of topics"
          ]
        }
      ]
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedType: undefined
    };
    this.experienceTypeContainer = this.experienceTypeContainer.bind(this);
    this.selectType = this.selectType.bind(this);
  }

  selectType(typeId) {
    this.setState({
      selectedType: typeId
    });
    if (
      document.getElementsByClassName("experience-type") &&
      document.getElementsByClassName("experience-type").length > 0
    ) {
      let elements = document.getElementsByClassName("experience-type");
      for (let element of elements) {
        element.style.backgroundColor = "grey";
      }
      document.getElementById(typeId).style.backgroundColor = "azure";
    }
  }

  experienceTypeContainer(experience) {
    return (
      <div
        onClick={() => {
          this.selectType(experience.description);
        }}
        key={experience.description}
        id={experience.description}
        className="experience-type"
      >
        <div className="experience-type-image">
          <img
            width="150px"
            height="150px"
            src={experience.image}
            alt={experience.altText}
          />
        </div>
        <div className="experience-type-description">
          <b>{experience.description}</b>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="experience-parent-container">
        <div className="experience-caption">HARD WORK IS NON-NEGOTIABLE</div>
        <div className="experience-type-selector">
          {this.experienceTypes.map((experience) => {
            return this.experienceTypeContainer(experience);
          })}
        </div>
        {this.state.selectedType && (
          <div className="experience-details">
            {this.experienceDetails
              .find(
                (experienceType) =>
                  experienceType.type === this.state.selectedType
              )
              .experiences.map((experience) => {
                return (
                  <FadeIn delay={100} transitionDuration={1000}>
                    <DetailHolder
                      item={experience}
                      isWorkExperience={true}
                    ></DetailHolder>
                  </FadeIn>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}
