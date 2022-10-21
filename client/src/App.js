import React from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import {Route, Routes} from 'react-router-dom' 
import AllMoviesPage from './components/AllMoviesComp'
import MoviesPage from './pages/MoviesPage'
import EditMovieComp from './components/EditMovieComp'
import SubsPage from './pages/SubsPage'



export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage/:username' element={<MainPage/>}/>
        <Route path='/AllMoviesComp/:username' element={<AllMoviesPage/>}/>
        <Route path='/MoviesPage/:username' element={<MoviesPage/>}/>
        <Route path='/EditMovieComp/:id' element={<EditMovieComp/>}/>
        <Route path='/SubsPage/:username' element={<SubsPage/>}/>
      </Routes>
    </div>
  )
}
