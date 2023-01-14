import { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="card">
            <div className="card-image">
                <img className="card-image-display" src={this.props.badge.src} alt={this.props.badge.alt}></img>
            </div>
            <div className="card-details">
                <p>Valid Until: {this.props.badge.validity}</p>
                <p>View the Credential <a className="hyper-link" href="https://learn.microsoft.com/en-us/users/sairajudayshankar-9802/transcript/v0y24f04qyjny18" target="blank">HERE</a></p>
            </div>
        </div>
        );
    }
}