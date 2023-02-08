import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div>
            <div className="flex-container">
                <div className="logo menu-btn">
                    <Link to={"/welcome"}><img width={"120px"} src="/images/Sairaj - Resize.png" alt="Sairaj - Logo"></img></Link>
                </div>
                <div className="flex-container-buttons">
                    <div className="menu-btn">
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className="menu-btn">Experience</div>
                    <div className="menu-btn">
                        <Link to={"/licenses"}>Licenses</Link>
                    </div>
                    <div className="menu-btn">
                        <Link to={"/skills"}>Skills</Link>
                    </div>
                    <div className="menu-btn">
                        <Link to={"/education"}>Education</Link>
                    </div>
                    <div className="menu-btn">
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;