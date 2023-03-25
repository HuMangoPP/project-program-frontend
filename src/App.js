
import './App.css';
import 'react-calendar/dist/Calendar.css'
import './styles/Calendar.css'
import './styles/Login.css'
import './styles/SingleTask.css'
import './styles/TaskCollection.css'
import './styles/Recommendations.css'
import './styles/MainJournal.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login';
import MainJournal from './pages/mainJournal'
import Recommendations from './pages/recommendations'
import TasksPage from './pages/tasks';
import SingleTaskPage from './pages/singleTask';

import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const instance = axios.create({
    baseURL: 'http://pufferfishproject.pythonanywhere.com/'
  })

  const [queriedRecommendations, setQueriedRecommendations] = useState([])

  useEffect(() => {
    console.log(queriedRecommendations)
  }, [queriedRecommendations])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/journal' element={<MainJournal instance={instance} setRecommendations={setQueriedRecommendations} />} />
      <Route path='/recommendations' element={<Recommendations recommendations={queriedRecommendations} />} />
      <Route path='/tasks' element={< TasksPage />} />
      <Route path='/task' element={<SingleTaskPage />} />
    </Routes>
  )
}

export default App;
