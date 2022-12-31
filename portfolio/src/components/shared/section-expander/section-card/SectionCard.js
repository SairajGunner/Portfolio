import './SectionCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function SectionCard(props) {
    return (
        <div className="card">
            <div className="card-title-div">
                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                <div>{props.title}</div>
            </div>
            <div className="card-additional-info">
                <p>Proficiency: {props.proficiency}</p>
                <p>Experience: {props.type}</p>
            </div>
        </div>
    );
}

export default SectionCard;