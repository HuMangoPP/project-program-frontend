
import './App.css';
import 'react-calendar/dist/Calendar.css'
import './styles/Calendar.css'
import './styles/Login.css'
import './styles/SingleTask.css'
import './styles/TaskCollection.css'
import './styles/Recommendations.css'
import './styles/MainJournal.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login';
import MainJournal from './pages/mainJournal'
import Recommendations from './pages/recommendations'
import TasksPage from './pages/tasks';
import SingleTaskPage from './pages/singleTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/journal' element={<MainJournal />} />
        <Route path='/recommendations' element={<Recommendations />} />
        <Route path='/tasks' element={< TasksPage />} />
        <Route path='/task' element={<SingleTaskPage />} />
      </Routes>
    </Router>
  )
}

export default App;
