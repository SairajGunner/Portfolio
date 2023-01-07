import { Component } from 'react';
import Card from '../shared/card/Card';
import Carousel from '../shared/carousel/Carousel';
import './Certificates.scss';

export default class Certificates extends Component {
    images = [
        {
            src: '/images/Azure Architect.jpg',
            alt: 'Azure Architect'
        }, {
            src: '/images/Azure Admin.jpg',
            alt: 'Azure Administrator'
        }, {
            src: '/images/Azure Network Engineer.jpg',
            alt: 'Azure Network Engineer'
        }, {
            src: '/images/Azure Fundamentals.jpg',
            alt: 'Azure Fundamentals'
        }, {
            src: '/images/C-Sharp Developer.jpg',
            alt: 'C# Developer'
        }, {
            src: '/images/The Bits & Bytes of Computer Networking.jpg',
            alt: 'Computer Networks'
        }, {
            src: '/images/HTML, CSS, and Javascript for Web Developers.jpg',
            alt: 'Web Development'
        }, {
            src: '/images/Decision Making Certificate.jpg',
            alt: 'Decision Making'
        }, {
            src: '/images/Presentation Skills Certificate.jpg',
            alt: 'Presentation Skills'
        }, {
            src: '/images/Team Creation Certificate.jpg',
            alt: 'Team Creation'
        }, {
            src: '/images/Design Thinking for Innovation.jpg',
            alt: 'Design Thinking'
        }, {
            src: '/images/Game Design.jpg',
            alt: 'Game Design'
        }, {
            src: '/images/Getting Started with Gimp.jpg',
            alt: 'Gimp'
        }
    ];

    badges = [{
        src: '/images/Azure Architect Badge.png',
        alt: 'Azure Architect Badge',
        validity: 'May 2023'
    }, {
        src: '/images/Azure Admin Badge.png',
        alt: 'Azure Administrator Badge',
        validity: 'May 2023'
    }, {
        src: '/images/Azure Network Engineer Badge.png',
        alt: 'Azure Network Engineer Badge',
        validity: 'March 2023'
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
            <div>
                <div className="container">
                    {
                        this.badges.map((badge) => {
                            return (<Card badge={badge}></Card>)
                        })
                    }
                </div>
                <div className="container">
                    <Carousel images={this.images}></Carousel>
                </div>
            </div>
        );
    }
}