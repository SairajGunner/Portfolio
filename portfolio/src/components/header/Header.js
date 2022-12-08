import './Header.scss';

function Header() {
    return (
        <div>
            <div className="flex-container">
                <div className="logo">
                    <img width={"120px"} src="/images/Sairaj - Resize.png"></img>
                </div>
                <div className="flex-container-buttons">
                    <div>Home</div>
                    <div>Skills</div>
                    <div>Experience</div>
                    <div>Education</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Header;