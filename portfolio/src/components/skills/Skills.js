import { Component } from 'react';
import SkillCluster from '../shared/skill-cluster/SkillCluster';
import './Skills.scss';

export default class Skills extends Component {
    skills = [
        {
            name: 'Web Development',
            subSkills: [{
                name: 'Azure',
                description: ''
            }, {
                name: '.NET',
                description: ''
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
                name: 'three.js', 
                description: '' 
            }, { 
                name: 'Unity', 
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
