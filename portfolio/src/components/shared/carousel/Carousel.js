import { Component } from 'react';
import './Carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleDot, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
        this.changeImage = this.changeImage.bind(this);
        this.seekImage = this.seekImage.bind(this);
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

    seekImage(index) {
        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div>
                <div className="carousel-container">
                    <div onClick={() => { this.changeImage('L') }} className="left-arrow">
                        <FontAwesomeIcon className="fa-2x" icon={faArrowLeft} />
                    </div>
                    <div className="image-renderer-container">
                        <div className="image-renderer">
                            <img className="image-content" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].alt}></img>
                        </div>
                        <div>
                            {
                                this.props.images.map((element, index) => {
                                    if (index === this.state.currentImageIndex)
                                        return <FontAwesomeIcon className="renderer-indicator" icon={faCircleDot} />
                                    else
                                        return <FontAwesomeIcon onClick={() => { this.seekImage(index) }} className="renderer-indicator" icon={faCircle} />
                                })
                            }
                        </div>
                    </div>
                    <div onClick={() => { this.changeImage('R') }} className="right-arrow">
                        <FontAwesomeIcon className="fa-2x" icon={faArrowRight} />
                    </div>
                </div>
                <div className="carousel-phone-renderer">
                    <ul>
                        {
                            this.props.images.map((image) => {
                                return (<li>{image.title}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}