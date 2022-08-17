import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Email from './Email/Email';
import Header from './Header/Header';
import About from './About/About';
import BugTracker from './BugTracker/BugTracker';
import Projects from './Projects/Projects';
import BoardingPass from './BoardingPass/BoardingPass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/email' element={<Email />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/bugtracker' element={<BugTracker />} />
          <Route path='/boardingpass' element={<BoardingPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
