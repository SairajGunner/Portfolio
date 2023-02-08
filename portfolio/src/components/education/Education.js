import { Component } from 'react';
import DetailHolder from '../shared/detail-holder/DetailHolder';
import './Education.scss';

export default class Education extends Component {
    education = [
        {
            name: 'Data Analytics for Business Decision Making',
            type: 'Graduate Certificate',
            institution: 'Durham College',
            location: 'Oshawa, ON, Canada',
            duration: 'Sept 2022 - Present',
            load: 'Full-Time',
            favorites: [{
                name: 'Data Analysis Tools',
                skills: ['Hadoop', 'Spark', 'Scala']
            }],
            grade: '4.64 CGPA on a scale of 5'
        },
        {
            name: 'Electronics & Telecommunication Engineering',
            type: 'Bachelor in Engineering',
            institution: 'Mumbai University',
            location: 'Navi Mumbai, MH, India',
            duration: 'May 2013 - May 2017',
            load: 'Full-Time',
            favorites: [{
                name: 'Data Compression and Encryption',
                skills: ['Compression Techniques', 'Encryption Techniques']
            }, {
                name: 'Image Processing',
                skills: ['MATLAB', 'Image Segmentation']
            }, {
                name: 'Structured Programming',
                skills: ['C', 'Algorithms', 'Programming']
            }, {
                name: 'Object Oriented Programming',
                skills: ['Java', 'Algorithms', 'Programming']
            }],
            grade: '7.19 CGPA on a scale of 10'
        }
    ]

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="education-container">
                <div className="caption">
                    KNOWLEDGE IS WEALTH
                </div>
                <div className="credential-section">
                    {
                        this.education.map((credential) => {
                            return (<DetailHolder key={credential.name} item={credential}></DetailHolder>)
                        })
                    }
                </div>
            </div>
        )
    }
}