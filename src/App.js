import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Header from './componets/Hero';
import Hero from './componets/Hero';
import { BrowserRouter as Router} from 'react-router-dom';
import AboutMe from './componets/AboutMe';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Hero />
    <AboutMe />
    </Router>
    </div>
  );
}

export default App;
