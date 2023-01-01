import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FollowPointer from './components/FollowPointer'
const App=()=>{
  return<>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <FollowPointer /> 
    </Router>
  </>
}

export default App