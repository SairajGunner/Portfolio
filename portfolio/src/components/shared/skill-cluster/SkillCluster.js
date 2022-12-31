import { Component } from 'react';
import SkillNode from './skill-node/SkillNode';
import './SkillCluster.scss';

export default class SkillCluster extends Component {
    ChangeOrientation() {
        let containerDiv = document.getElementById('skills-flex-container');
        if (containerDiv) {
            if (containerDiv && (containerDiv.style.flexDirection === 'row' || containerDiv.style.flexDirection === ''))
                containerDiv.style.flexDirection = 'column';
            else
                containerDiv.style.flexDirection = 'row';
        }
    }
    
    render() {
        return (
            <div id="skills-flex-container" className="container">
                {
                    this.props.skills.map((skill) => {
                        return (<SkillNode key={skill.name} changeOrientation={this.ChangeOrientation} skill={skill}></SkillNode>)
                    })
                }
            </div>
        );
    }
}
