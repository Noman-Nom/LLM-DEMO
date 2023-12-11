import React from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import VideoPage from './Pages/VideoPage/VideoPage'
import WidgetsPage from './Pages/WidgetsPage/WidgetsPage'
import BlackPage from './Pages/BlackPage/BlackPage'
import ModulesPage from './Pages/ModulesPage/ModulesPage'
import UpCommingCoursePage from './Pages/UpCommingCoursePage/UpCommingCoursePage'
import TopCourses from './Pages/TopCourses/TopCourses'
import WhyLearnPage from './Pages/WhyLearnPage/WhyLearnPage'

const App = () => {
  return (
    <div>
        <Home/>
        <VideoPage/>
        <WidgetsPage/>
        <BlackPage/>
        <ModulesPage/>
        <WhyLearnPage/>
        <UpCommingCoursePage/>
        <TopCourses/>
        
    </div>
  )     
}

export default App
