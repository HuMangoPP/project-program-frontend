
import './App.css';
import 'react-calendar/dist/Calendar.css'
import './styles/Calendar.css'
import './styles/Login.css'
import './styles/Dashboard.css'
import './styles/TaskCollection.css'
import './styles/Recommendations.css'
import './styles/MainJournal.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login';
import MainJournal from './pages/mainJournal'
import Recommendations from './pages/recommendations'
import TasksPage from './pages/journalHistory';
import SingleTaskPage from './pages/dashboard';

import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const instance = axios.create({
    baseURL: 'http://pufferfishproject.pythonanywhere.com/'
  })

  const [queriedRecommendations, setQueriedRecommendations] = useState([])
  const [userId, setUserId] = useState(5)
  const [habits, setHabits] = useState([])

  useEffect(() => {
    let hostname = `${window.location.origin}/`
    let site = document.URL.replace(hostname, '')
    document.title = `Pufferfish ${site}`
  }, [0])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login instance={instance} setUserId={setUserId} />} />
      <Route path='/journal' element={<MainJournal instance={instance} setRecommendations={setQueriedRecommendations} userId={userId} />} />
      <Route path='/recommendations' element={<Recommendations recommendations={queriedRecommendations} />} />
      <Route path='/dashboard'  element={<SingleTaskPage userId={userId} instance={instance} />} />
      <Route path='/habit' element={<TasksPage userid={userId} instance={instance} />} />
    </Routes>
  )
}

export default App;
