import React from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import {Route, Routes} from 'react-router-dom' 
import AllMoviesPage from './pages/AllMoviesPage'
import MoviesPage from './pages/MoviesPage'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/MainPage/:username' element={<MainPage/>}/>
        <Route path='/AllMoviesPage/:username' element={<AllMoviesPage/>}/>
        <Route path='/MoviesPage/:username' element={<MoviesPage/>}/>
      </Routes>
    </div>
  )
}
