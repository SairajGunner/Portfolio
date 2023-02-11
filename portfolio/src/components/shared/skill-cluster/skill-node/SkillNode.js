import { Component } from 'react';
import './SkillNode.scss';
import FadeIn from 'react-fade-in/lib/FadeIn';
import SubSkillNode from './sub-skill-node/SubSkillNode';

export default class SkillNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTray: false
        };
        this.toggleTray = this.toggleTray.bind(this);
    }

    toggleTray() {
        this.setState({
            showTray: !this.state.showTray
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.toggleTray} className='skill-node'>
                    <p>{this.props.skill.name}</p>
                </div>
                {
                    this.state.showTray &&
                    <div className='sub-skill-list'>
                        {
                            this.props.skill.subSkills.map((subSkill) => {
                                return (
                                    <FadeIn delay={100} transitionDuration={1000} >
                                        <SubSkillNode name={subSkill.name} description={subSkill.description}></SubSkillNode>
                                    </FadeIn>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}
