import { Component } from 'react';
import SkillCluster from '../shared/skill-cluster/SkillCluster';
import './Skills.scss';

export default class Skills extends Component {
    skills = [
        {
            name: 'AI / ML',
            subSkills: [{ 
                name: 'SkLearn', 
                description: '' 
            }, { 
                name: 'TensorFlow', 
                description: '' 
            }, { 
                name: 'Keras', 
                description: '' 
            }, { 
                name: 'PyTorch', 
                description: '' 
            }]
        }, {
            name: 'Data Analysis',
            subSkills: [{
                name: 'HDFS',
                description: ''
            }, {
                name: 'Hive',
                description: ''
            }, { 
                name: 'Spark',
                description: '' 
            }, { 
                name: 'Spark Streaming', 
                description: '' 
            }, { 
                name: 'Flume', 
                description: '' 
            }, { 
                name: 'Kafka', 
                description: '' 
            }, { 
                name: 'Tableau', 
                description: '' 
            }, { 
                name: 'Power BI', 
                description: '' 
            }]
        }, {
            name: 'Web Development',
            subSkills: [{
                name: 'Azure',
                description: `<ul><li>Expertise in Azure architecture and solution design</li> <li>Implemented various PaaS and IaaS solutions</li> <li>Carried out the migration of several applications to the cloud</li></ul>`
            }, {
                name: '.NET',
                description: `<ul><li>Multiple years of experience in .NET Core</li> <li>Microsoft certified C# developer</li> <li>Implemented complex, reusable functionalities in .NET</li></ul>`
            }, {
                name: 'Node JS',
                description: ''
            }, { 
                name: 'Angular',
                description: '' 
            }, { 
                name: 'React', 
                description: '' 
            }, { 
                name: 'SQL', 
                description: '' 
            }, { 
                name: 'MongoDB', 
                description: '' 
            }]
        }, {
            name: 'Research',
            subSkills: [{ 
                name: 'Generative AI',
                description: '' 
            }, { 
                name: 'On-Device AI',
                description: '' 
            }, { 
                name: 'Spiking Neural Networks',
                description: '' 
            }]
        }
    ];

    render() {
        return (
            <SkillCluster skills={this.skills}></SkillCluster>
        );
    }

}
