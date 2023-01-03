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
                    <span onMouseOver={ChangeColor}>FULL</span>
                    <br></br>
                    <span onMouseOver={ChangeColor}>STACK</span>
                    <br></br>
                    <span onMouseOver={ChangeColor}>WEB</span>
                    <br></br>
                    <span onMouseOver={ChangeColor}>DEVELOPER</span>
                </p>
            </div>
            <div className="intro-small">
                <p onMouseOver={ChangeColor} className="gigantic-font">FULL STACK WEB DEVELOPER</p>
            </div>
            <div className="brief-description">
                <section>
                    <p className="intro-font">Hello there!<br></br>My name is <span className="name-font"><i>Sairaj Udayshankar</i></span>.</p>
                    <br></br>
                    <p className="intro-second">Below are some key facts about me. I am</p>
                    <ul className="intro-second">
                        <li>a seasoned <b><i>web developer</i></b> with profund experience</li>
                        <li>a <b><i>cloud-specialist</i></b> with multiple certificates in Azure</li>
                        <li>an up-and-coming <b><i>data analyst</i></b></li>
                        <li> a human being :)</li>
                    </ul>
                    <br></br>
                    <p className="intro-second">You can view more information about me on this website.</p>
                    <br></br>
                    <p>Tip: Move the mouse over the text to feel the magic</p>
                </section>
            </div>
        </div>
    );
}

export default Home;