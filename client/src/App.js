import React from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import {Route, Routes} from 'react-router-dom' 
import AllMoviesPage from './components/AllMoviesComp'
import MoviesPage from './pages/MoviesPage'
import EditMovieComp from './components/EditMovieComp'
import SubsPage from './pages/SubsPage'
import AddMovieComp from './components/AddMovieComp'
import AddMemberComp from './components/AddMemberComp'
import MoviePage from './pages/MoviePage'




export default function App() {
  return (
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage/:username' element={<MainPage/>}/>
        <Route path='/AllMoviesComp/:username' element={<AllMoviesPage/>}/>
        <Route path='/AddMovieComp' element={<AddMovieComp/>}/>
        <Route path='/MoviesPage/:username' element={<MoviesPage/>}/>
        <Route path='/EditMovieComp/:id' element={<EditMovieComp/>}/>
        <Route path='/SubsPage/:username' element={<SubsPage/>}/>
        <Route path='/AddMemberComp/' element={<AddMemberComp/>}/>
        <Route path='/EditMemberComp/:id' element={<EditMovieComp/>}/>
        <Route path='/MoviePage' element={<MoviePage/>}/>
      </Routes>
  )
}
