import { Component } from 'react';
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

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Carousel images={this.images}></Carousel>
            </div>
        );
    }
}