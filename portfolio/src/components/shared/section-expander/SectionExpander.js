import SectionCard from './section-card/SectionCard';
import './SectionExpander.scss';

function PopulateListUnderLevel(skills) {
    return skills.map((skill) => {
        <div>
            <SectionCard title={skill.title} proficiency={skill.proficiency} type={skill.type}></SectionCard>
        </div>
    });
}

function SectionExpander(props) {
    return (
        <div className="expander-float-x">
            {/* <div>Skill</div>
            <div>Beginner</div>
            <div>Intermediate</div>
            <div>Advanced</div>
            <div>Expert</div> */}
            <div className="expander-float-y">
                {
                    PopulateListUnderLevel(props.skills)
                }
            </div>
            <div className="expander-float-y">
                {
                    PopulateListUnderLevel(props.skills)
                }
            </div>
            <div className="expander-float-y">
                {
                    PopulateListUnderLevel(props.skills)
                }
            </div>
            <div className="expander-float-y">
                {
                    PopulateListUnderLevel(props.skills)
                }
            </div>
        </div>
    );
}

export default SectionExpander;