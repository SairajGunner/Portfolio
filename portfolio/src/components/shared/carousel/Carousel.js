import { Component } from 'react';
import './Carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(direction) {
        if (this.props.images && this.props.images.length > 0) {
            const lastIndex = this.props.images.length - 1;
            if (direction === 'R') {
                if (this.state.currentImageIndex + 1 > lastIndex)
                    this.setState({
                        currentImageIndex: 0
                    });
                else
                    this.setState({
                        currentImageIndex: this.state.currentImageIndex + 1
                    });
            } else {
                if (this.state.currentImageIndex - 1 < 0)
                    this.setState({
                        currentImageIndex: lastIndex
                    });
                else
                    this.setState({
                        currentImageIndex: this.state.currentImageIndex - 1
                    });
            }
        }
    }

    render() {
        return (
            <div className="carousel-container">
                <div onClick={() => { this.changeImage('L') }} className="left-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="image-renderer-container">
                    <div className="image-renderer">
                        <img src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].alt}></img>
                        {/* <img src="/images/C-Sharp Developer.PNG" alt={this.props.images[this.state.currentImageIndex].alt}></img> */}
                    </div>
                    <div className="image-renderer-indicators">
                        {
                            this.props.images.map(() => {
                                return <FontAwesomeIcon icon={faCircleDot} />
                            })
                        }
                    </div>
                </div>
                <div onClick={() => { this.changeImage('R') }} className="right-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        )
    }
}