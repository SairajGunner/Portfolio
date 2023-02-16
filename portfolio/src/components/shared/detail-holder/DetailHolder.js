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
                <div className={`${this.props.isWorkExperience ? 'detail-holder-logo-work' : 'detail-holder-logo'}`}>
                    <img width={'225px'} height={'225px'} src={this.props.item.logo} alt={this.props.item.altText} />
                </div>
                {
                    !this.props.isWorkExperience &&
                    <div className="detail-holder-details">
                        <p>{this.props.item.duration} ({this.props.item.load})</p>
                        <h1>{this.props.item.name}</h1>
                        <h2>{this.props.item.type}</h2>
                        <h3>{this.props.item.institution}, {this.props.item.location}</h3>
                        <h4>Grade: {this.props.item.grade}</h4>
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
                }
                {
                    this.props.isWorkExperience &&
                    <div className="detail-holder-details">
                        <p>{this.props.item.duration} ({this.props.item.load})</p>
                        <h1>{this.props.item.name}</h1>
                        <h3>{this.props.item.institution}, {this.props.item.location}</h3>
                        <div className="detail-holder-rnr">
                            <p>
                                Skills:
                                <div className="pill-flex">
                                    {
                                        this.props.item.favorites.map((skill) => {
                                            return (<Pill key={skill.name} item={skill}></Pill>)
                                        })
                                    }
                                </div>
                            </p>
                            {
                                this.props.item.roles && this.props.item.roles.length > 0 &&
                                <p>
                                    Roles:
                                    <ul>
                                        {
                                            this.props.item.roles.map((role) => {
                                                return <li>{role}</li>
                                            })
                                        }
                                    </ul>
                                </p>
                            }
                            {
                                this.props.item.responsibilities && this.props.item.responsibilities.length > 0 &&
                                <p>
                                    Responsibilities:
                                    <ul>
                                        {
                                            this.props.item.responsibilities.map((responsibilty) => {
                                                return <li>{responsibilty}</li>
                                            })
                                        }
                                    </ul>
                                </p>
                            }
                            {
                                this.props.item.achievements && this.props.item.achievements.length > 0 &&
                                <p>
                                    Achievements:
                                    <ul>
                                        {
                                            this.props.item.achievements.map((achievement) => {
                                                return <li>{achievement}</li>
                                            })
                                        }
                                    </ul>
                                </p>
                            }
                            {
                                this.props.item.links && this.props.item.links.length > 0 &&
                                <p>
                                    Links:
                                    <ul>
                                        {
                                            this.props.item.links.map((link) => {
                                                return <li><a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>
                                            })
                                        }
                                    </ul>
                                </p>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}