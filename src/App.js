
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import MainJournal from './pages/mainJournal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journal' element={<MainJournal />} />
      </Routes>
    </Router>
  )
}

export default App;
