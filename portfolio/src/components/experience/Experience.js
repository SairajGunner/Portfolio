import { Component } from 'react';
import './Experience.scss';

export default class Experience extends Component {
    experiences = [{
        image: '/images/Work.png',
        altText: 'Work',
        description: 'Work'
    }, {
        image: '/images/Projects.png',
        altText: 'Projects',
        description: 'Projects'
    }, {
        image: '/images/Study.png',
        altText: 'Study',
        description: 'Study'
    }];

    constructor(props) {
        super(props);
        this.state = {

        };
        this.experienceTypeContainer = this.experienceTypeContainer.bind(this);
    }

    experienceTypeContainer(experience) {
        return (
            <div className="experience-type">
                <div className="experience-type-image">
                    <img width='200px' height='200px' src={experience.image} alt={experience.altText} />
                </div>
                <h2 className="experience-type-description">{experience.description}</h2>
            </div>
        );
    }

    render() {
        return (
            <div className="experience-parent-container">
                <div className="experience-type-selector">
                    {
                        this.experiences.map((experience) => {
                            return this.experienceTypeContainer(experience)
                        })
                    }
                </div>
            </div>
        );
    }
}