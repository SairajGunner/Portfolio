import './Header.scss';

function Header() {
    return (
        <div>
            <div className="flex-container">
                <div className="logo menu-btn">
                    <img width={"120px"} src="/images/Sairaj - Resize.png"></img>
                </div>
                <div className="flex-container-buttons">
                    <div className="menu-btn">Home</div>
                    <div className="menu-btn">Skills</div>
                    <div className="menu-btn">Experience</div>
                    <div className="menu-btn">Education</div>
                    <div className="menu-btn">Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Header;