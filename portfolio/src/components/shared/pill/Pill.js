import { Component } from 'react';
import './Pill.scss';

export default class Pill extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div className="pill">{this.props.item.name}</div>)
    }
}