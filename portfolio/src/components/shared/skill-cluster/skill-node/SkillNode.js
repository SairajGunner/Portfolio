import { Component } from 'react';
import './SkillNode.scss';

export default class SkillNode extends Component {
    render() {
        return (
            <div>
                <div className='skill-node'>
                    <p>{this.props.skill.name}</p>
                </div>
                <div className='sub-skill-list'>
                    {
                        this.props.skill.subSkills.map((subSkill) => {
                            return (<div className='sub-skill-item'>
                                <p>{subSkill}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}
