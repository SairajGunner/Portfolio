import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <Welcome></Welcome>
      {/* <Home></Home> */}
      {/* <Skills></Skills> */}
    </div>
  );
}

export default App;
