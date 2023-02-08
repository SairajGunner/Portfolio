import './Welcome.scss'

function Welcome() {
    return (
        <div>
            <header className="Welcome-text">
                <p className="large-font">Hi there!</p>
                <p>This is <span className="Welcome-name-animation">SAIRAJ</span></p>
                <p className="large-font">Welcome to My Portfolio.</p>
            </header>
        </div>
    );
}

export default Welcome;