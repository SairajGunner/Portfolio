import { Component } from 'react';
import SkillCluster from '../shared/skill-cluster/SkillCluster';
import './Skills.scss';

export default class Skills extends Component {
    skills = [
        {
            name: 'Web Development',
            subSkills: ['Azure', '.NET', 'Angular', 'React', 'SQL Server']
        }, {
            name: 'Data Analysis',
            subSkills: ['HDFS', 'Hive', 'Spark', 'Spark Streaming', 'Flume', 'Kafka']
        }, {
            name: '3D & Game Development',
            subSkills: ['three.js', 'Unity']
        }, {
            name: 'Research',
            subSkills: ['Technology', 'Human Psychology']
        }
    ];

    render() {
        return (
            <SkillCluster skills={this.skills}></SkillCluster>
        );
    }

}
