import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      {/* <Welcome></Welcome> */}
      <Home></Home>
    </div>
  );
}

export default App;
