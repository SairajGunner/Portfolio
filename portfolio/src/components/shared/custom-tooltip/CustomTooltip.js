import './CustomTooltip.scss';
import { Component } from "react";

export default class CustomTooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="custom-tooltip">
                <h3 className="custom-tooltip-title">{this.props.title}</h3>
                <hr></hr>
                <p className="custom-tooltip-description">
                    {this.props.description}
                </p>
            </div>
        );
    }
}