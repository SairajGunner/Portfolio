import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Welcome from './components/welcome/Welcome';
import { Routes, Route } from "react-router-dom";
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/licenses" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
