import './threeJS.scss';
import { Component } from "react";

export default class ThreeJS extends Component {
    designs = ['Haunted House', 'Physics', '3D Text'];

    render() {
        return (
            <div className="threejs-container">
                <div className="threejs-caption">
                    3D Art Using ThreeJS
                </div>
                <summary>
                    ThreeJS is a JavaScript library that leverages Web GL to render three dimensional animations on browsers.
                </summary>
                <div className="threejs-list-container">
                Below are a few 3D experiences created using ThreeJS:
                    <ul className="threejs-work-list">
                        <li><a href={window.location.href + "/haunted-house"} target="_blank" rel="noreferrer">Haunted House</a></li>
                        <li><a href={window.location.href + "/physics"} target="_blank" rel="noreferrer">Physics</a></li>
                        <li><a href={window.location.href + "/3d-text"} target="_blank" rel="noreferrer">3D Text</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}