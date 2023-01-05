import { Component } from 'react';
import Carousel from '../shared/carousel/Carousel';
import './Certificates.scss';

export default class Certificates extends Component {
    images = [
        {
            src: '/images/Azure Architect.PNG',
            alt: 'Azure Architect'
        }, {
            src: '/images/Azure Administrator.PNG',
            alt: 'Azure Administrator'
        }, {
            src: '/images/Azure Network Engineer.PNG',
            alt: 'Azure Network Engineer'
        }, {
            src: '/images/Azure Fundamentals.PNG',
            alt: 'Azure Fundamentals'
        }, {
            src: '/images/C-Sharp Developer.PNG',
            alt: 'C# Developer'
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