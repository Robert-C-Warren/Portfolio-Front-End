import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Email from './Email/Email';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/email' element={<Email />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
