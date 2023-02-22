import { Component } from 'react';
import SkillCluster from '../shared/skill-cluster/SkillCluster';
import './Skills.scss';

export default class Skills extends Component {
    skills = [
        {
            name: 'Web Development',
            subSkills: [{
                name: 'Azure',
                description: `<ul><li>Expertise in Azure architecture and solution design</li> <li>Implemented various PaaS and IaaS solutions</li> <li>Carried out the migration of several applications to the cloud</li></ul>`
            }, {
                name: '.NET',
                description: `<ul><li>Multiple years of experience in .NET Core</li> <li>Microsoft certified C# developer</li> <li>Implemented complex, reusable functionalities in .NET</li></ul>`
            }, { 
                name: 'Angular',
                description: '' 
            }, { 
                name: 'React', 
                description: '' 
            }, { 
                name: 'SQL Server', 
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
            }]
        }, {
            name: '3D & Game Development',
            subSkills: [{ 
                name: 'three.js', 
                description: '' 
            }, { 
                name: 'Unity', 
                description: '' 
            }]
        }, {
            name: 'Research',
            subSkills: [{ 
                name: 'Game Analytics',
                description: '' 
            }, { 
                name: 'Virtual Reality',
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
