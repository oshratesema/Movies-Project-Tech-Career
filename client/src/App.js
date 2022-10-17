import React from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import {Route, Routes} from 'react-router-dom' 
import AllMoviesPage from './components/AllMoviesComp'
import MoviesPage from './pages/MoviesPage'
import EditMovieComp from './components/EditMovieComp'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/MainPage/:username' element={<MainPage/>}/>
        <Route path='/AllMoviesPage/:username' element={<AllMoviesPage/>}/>
        <Route path='/MoviesPage/:username' element={<MoviesPage/>}/>
        <Route path='/EditMovieComp/:name' element={<EditMovieComp/>}/>
      </Routes>
    </div>
  )
}
