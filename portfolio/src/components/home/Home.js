import React from 'react';
import './Home.scss';

function Home() {
    function ChangeColor(e) {
        const colors = ['orange', 'magenta', 'pink', 'yellow', 'cyan', 'white'];
        e.target.style.color = colors[Math.floor(Math.random() * 5)];
    }

    return (
        <div className="container">
            <div className="intro-big">
                <p className="gigantic-font">
                    <div onMouseOver={ChangeColor}>
                        <span>DATA</span>
                        <br></br>
                        <span>ANALYST</span>
                    </div>
                    <hr style="
                        margin-top: 30px;
                        margin-bottom: 30px;
                    ">
                    <div onMouseOver={ChangeColor}>
                        <span>AI / ML</span>
                        <br></br>
                        <span>DEVELOPER</span>
                    </div>
                </p>
            </div>
            <div className="intro-small">
                <p onClick={ChangeColor} className="gigantic-font">DATA ANALYST / AI ML DEVELOPER</p>
            </div>
            <div className="brief-description">
                <section>
                    <p className="intro-font">Hello there!<br></br>My name is <span className="name-font"><i>Sairaj Udayshankar</i></span>.</p>
                    <br></br>
                    <p className="intro-second">Below are some key facts about me. I am</p>
                    <ul className="intro-second">
                        <li>a seasoned <b><i>data analyst</i></b> with profound experience</li>
                        <li>a <b><i>cloud-specialist</i></b> with multiple certificates in Azure</li>
                        <li>an up-and-coming <b><i>AI expert</i></b></li>
                        <li> a human being :)</li>
                    </ul>
                    <br></br>
                    <p className="intro-second">You can view more information about me on this website.</p>
                    <br></br>
                </section>
            </div>
        </div>
    );
}

export default Home;
