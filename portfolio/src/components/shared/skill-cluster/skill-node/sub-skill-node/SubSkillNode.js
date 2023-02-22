import './SubSkillNode.scss';
import { Component } from 'react';
// import CustomTooltip from '../../../custom-tooltip/CustomTooltip';

export default class SubSkillNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip: false
        };
        this.toggleTooltip = this.toggleTooltip.bind(this);
    }

    toggleTooltip() {
        this.setState({
            showTooltip: !this.state.showTooltip
        });
    }

    render() {
        return (
            <div onClick={this.toggleTooltip} id={this.props.name} key={this.props.name} className='sub-skill-item'>
                <p>{this.props.name}</p>
                {/* {
                    this.state.showTooltip &&
                    <CustomTooltip title={this.props.name} description={this.props.description}></CustomTooltip>
                } */}
            </div>
        );
    }
}