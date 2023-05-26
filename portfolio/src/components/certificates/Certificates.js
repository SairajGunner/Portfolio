import { Component } from 'react';
import Card from '../shared/card/Card';
import Carousel from '../shared/carousel/Carousel';
import './Certificates.scss';

export default class Certificates extends Component {
    images = [
        {
            src: '/images/Azure Solutions Architect Certificate Renewal.PNG',
            alt: 'Azure Architect',
            title: 'Microsoft - Azure Architect'
        }, {
            src: '/images/Azure Administrator Certificate Renewal.PNG',
            alt: 'Azure Administrator',
            title: 'Microsoft - Azure Administrator'
        }, {
            src: '/images/Microsoft Certified Azure Network Engineer Renewed.PNG',
            alt: 'Azure Network Engineer',
            title: 'Microsoft - Azure Network Engineer'
        }, {
            src: '/images/Azure Fundamentals.jpg',
            alt: 'Azure Fundamentals',
            title: 'Microsoft - Azure Fundamentals'
        }, {
            src: '/images/C-Sharp Developer.jpg',
            alt: 'C# Developer',
            title: 'Microsoft - C# Developer'
        }, {
            src: '/images/The Bits & Bytes of Computer Networking.jpg',
            alt: 'Computer Networks',
            title: 'Google - The Bits & Bytes of Computer Networking'
        }, {
            src: '/images/HTML, CSS, and Javascript for Web Developers.jpg',
            alt: 'Web Development',
            title: 'Johns Hopkins University - HTML, CSS, and Javascript for Web Developers'
        }, {
            src: '/images/Decision Making Certificate.jpg',
            alt: 'Decision Making',
            title: 'Harvard ManageMentor - Decision Making'
        }, {
            src: '/images/Presentation Skills Certificate.jpg',
            alt: 'Presentation Skills',
            title: 'Harvard ManageMentor - Presentation Skills'
        }, {
            src: '/images/Team Creation Certificate.jpg',
            alt: 'Team Creation',
            title: 'Harvard ManageMentor - Team Creation'
        }, {
            src: '/images/Design Thinking for Innovation.jpg',
            alt: 'Design Thinking',
            title: 'University of Virginia - Design Thinking for Innovation'
        }, {
            src: '/images/Game Design.jpg',
            alt: 'Game Design',
            title: 'California Institute of Arts - Game Design'
        }, {
            src: '/images/Getting Started with Gimp.jpg',
            alt: 'Gimp',
            title: 'Coursera Project Network - Gimp'
        }
    ];

    badges = [{
        src: '/images/Azure Architect Badge.png',
        alt: 'Azure Architect Badge',
        validity: 'May 2024'
    }, {
        src: '/images/Azure Admin Badge.png',
        alt: 'Azure Administrator Badge',
        validity: 'May 2024'
    }, {
        src: '/images/Azure Network Engineer Badge.png',
        alt: 'Azure Network Engineer Badge',
        validity: 'March 2024'
    }, {
        src: '/images/Azure Fundamentals Badge.png',
        alt: 'Azure Fundamentals Badge',
        validity: 'No Expiry'
    }, {
        src: '/images/C-Sharp Badge.png',
        alt: 'C# Developer Badge',
        validity: 'No Expiry'
    }];

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="certificates-middle">
                <div className="certificates-vertical-container">
                    <div className="certificates-middle">
                        <h1>Licenses</h1>
                    </div>
                    <div className="certificates-container">
                        {
                            this.badges.map((badge) => {
                                return (<Card badge={badge}></Card>)
                            })
                        }
                    </div>
                </div>

                <div className="certificates-vertical-container" style={{ marginTop: "50px" }}>
                    <div className="certificates-middle">
                        <h1>Certificates</h1>
                    </div>
                    <div className="certificates-container">
                        <Carousel images={this.images}></Carousel>
                    </div>
                </div>
            </div>
        );
    }
}