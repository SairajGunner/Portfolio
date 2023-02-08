import { Component } from 'react';
import { validate } from 'react-email-validator';
import './Contact.scss';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            subjectLine: '',
            message: '',
            isFormValid: false
        };
        this.emailIdChange = this.emailIdChange.bind(this);
        this.subjectLineChange = this.subjectLineChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.runFormValidation = this.runFormValidation.bind(this);
    }

    emailIdChange(event) {
        this.setState({
            emailId: event.target.value,
            subjectLine: this.state.subjectLine,
            message: this.state.message,
            isFormValid: this.runFormValidation()
        });
    }

    subjectLineChange(event) {
        this.setState({
            emailId: this.state.emailId,
            subjectLine: event.target.value,
            message: this.state.message,
            isFormValid: this.runFormValidation()
        });
    }

    messageChange(event) {
        this.setState({
            emailId: this.state.emailId,
            subjectLine: this.state.subjectLine,
            message: event.target.value,
            isFormValid: this.runFormValidation()
        });
    }

    runFormValidation() {
        let isValid = false;
        isValid = validate(this.state.emailId);
        if (!this.state.subjectLine.trim())
            isValid = false;
        return isValid;
    }

    sendMessage() {

    }

    render() {
        return (
            <div className="top-container">
                <div className="content">
                    <h1>Contact</h1>
                    <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/sairaj-udayshankar" target="blank">LinkedIn</a>.</p>
                    <p>
                        Or, use the below form to get in touch.
                    </p>
                    <p>
                        <label>Your Email Address <span className="required-indicator">*</span> :</label>
                    </p>
                    <input className="input-dimensions" type="text" value={this.state.emailId} onChange={this.emailIdChange}></input>
                    <p>Subject <span className="required-indicator">*</span> :</p>
                    <input className="input-dimensions" type="text" value={this.state.subjectLine} onChange={this.subjectLineChange}></input>
                    <p>Message :</p>
                    <textarea className="input-dimensions" rows={15} value={this.state.message} onChange={this.messageChange}></textarea>
                    <div className="submit-button-container">
                        <input className="submit-button" disabled={!this.state.isFormValid} type="submit" value="Send" onClick={this.sendMessage} />
                    </div>
                    {!(this.state.isFormValid) && <p className="error-message">Please enter a valid email ID and a subject line</p>}
                </div>
            </div>
        );
    }
}