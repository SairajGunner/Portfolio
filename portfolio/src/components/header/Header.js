import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTray: false
        }
        this.toggleTray = this.toggleTray.bind(this);
    }

    toggleTray() {
        if (!this.state.showTray)
            this.setState({
                showTray: true
            });
        else
            this.setState({
                showTray: false
            });
    }

    render() {
        return (
            <div>
                <div className="flex-container big-screen-menu">
                    <div className="logo menu-btn">
                        <NavLink to={"/welcome"}><img width={"120px"} src="/images/Sairaj - Resize.png" alt="Sairaj - Logo"></img></NavLink>
                    </div>
                    <div className="flex-container-buttons">
                        <div className="menu-btn">
                            <NavLink to={"/"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Home</NavLink>
                        </div>
                        <div className="menu-btn">
                            <NavLink to={"/experience"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Experience</NavLink>
                        </div>
                        <div className="menu-btn">
                            <NavLink to={"/licenses"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Licenses</NavLink>
                        </div>
                        <div className="menu-btn">
                            <NavLink to={"/skills"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Skills</NavLink>
                        </div>
                        <div className="menu-btn">
                            <NavLink to={"/education"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Education</NavLink>
                        </div>
                        <div className="menu-btn">
                            <NavLink to={"/contact"} className={(isActive) => {
                                return isActive.isActive ? "menu-btn-selected" : ""
                            }}>Contact</NavLink>
                        </div>
                    </div>
                </div>
                <div className="small-screen-menu small-screen-menu-header">
                    <div onClick={this.toggleTray} className="hamburger-menu">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                    <div className="logo menu-btn">
                        <NavLink to={"/welcome"}><img width={"120px"} src="/images/Sairaj - Resize.png" alt="Sairaj - Logo"></img></NavLink>
                    </div>
                </div>
                {
                    this.state.showTray &&
                    <div id="overlay-menu-tray" className="overlay-menu-tray">
                        <FadeIn delay={100} transitionDuration={1000}>
                            <div className="menu-items">
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Home</NavLink>
                                </div>
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/experience"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Experience</NavLink>
                                </div>
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/licenses"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Licenses</NavLink>
                                </div>
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/skills"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Skills</NavLink>
                                </div>
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/education"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Education</NavLink>
                                </div>
                                <div className="menu-btn">
                                    <NavLink onClick={this.toggleTray} to={"/contact"} className={(isActive) => {
                                        return isActive.isActive ? "menu-btn-selected" : ""
                                    }}>Contact</NavLink>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                }
            </div>
        );
    }
}
