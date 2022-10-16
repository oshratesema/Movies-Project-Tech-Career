import React from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import {Route, Routes} from 'react-router-dom' 

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage/:username' element={<MainPage/>}/>
      </Routes>
    </div>
  )
}
