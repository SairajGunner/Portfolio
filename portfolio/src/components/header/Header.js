import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div>
            <div className="flex-container">
                <div className="logo menu-btn">
                    <NavLink to={"/welcome"}><img width={"120px"} src="/images/Sairaj - Resize.png" alt="Sairaj - Logo"></img></NavLink>
                </div>
                <div className="flex-container-buttons">
                    <div className="menu-btn">
                        <NavLink to={"/"} className={(isActive) => {
                            console.log('Home ', isActive);
                            return isActive ? "menu-btn-selected" : ""
                        }
                        }>Home</NavLink>
                    </div>
                    <div className="menu-btn">
                        <NavLink to={"/experience"}>Experience</NavLink>
                    </div>
                    <div className="menu-btn">
                        <NavLink to={"/licenses"}>Licenses</NavLink>
                    </div>
                    <div className="menu-btn">
                        <NavLink to={"/skills"}>Skills</NavLink>
                    </div>
                    <div className="menu-btn">
                        <NavLink to={"/education"}>Education</NavLink>
                    </div>
                    <div className="menu-btn">
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;