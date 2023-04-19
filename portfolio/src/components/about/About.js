import { Component } from "react";
import './About.scss';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about-container">
                    <div className="about-caption">
                        THIS IS MY PERSONAL ROADMAP
                    </div>
                    <img src='/images/About.PNG' alt='Personal Roadmap'></img>
                </div>
            </div>
        );
    }
}