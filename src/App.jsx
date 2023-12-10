import React from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import VideoPage from './Pages/VideoPage/VideoPage'
import WidgetsPage from './Pages/WidgetsPage/WidgetsPage'
import BlackPage from './Pages/BlackPage/BlackPage'

const App = () => {
  return (
    <div>
        <Home/>
        <VideoPage/>
        <WidgetsPage/>
        <BlackPage/>
        
    </div>
  )     
}

export default App
