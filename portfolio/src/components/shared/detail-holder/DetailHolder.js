import { Component } from 'react';
import Pill from '../pill/Pill';
import './DetailHolder.scss';

export default class DetailHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="detail-holder-container">
                <p>{this.props.item.duration} ({this.props.item.load})</p>
                <h1>{this.props.item.name}</h1>
                <h3>{this.props.item.institution}, {this.props.item.location}</h3>
                <p>Favourite Courses:
                    <div className="pill-flex">
                    {
                        this.props.item.favorites.map((course) => {
                            return (<Pill key={course.name} item={course}></Pill>)
                        })
                    }
                    </div>
                </p>
            </div>
        );
    }
}