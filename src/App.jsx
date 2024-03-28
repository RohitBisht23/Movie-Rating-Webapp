
import './App.css'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import WatchList from './Components/WatchList'
import Banner from './Components/Banner'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {
  let[watchlist, setWatchlist] = useState([])

  let handleAddToWatchlist = (movieObj) =>{
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist)
  }

  let handleRemoveWatchList = (movieObj) =>{
    let filterdWatchList = watchlist.filter((movie) =>{
      return movie.id != movieObj.id
    })


    setWatchlist(filterdWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filterdWatchList))
    console.log(filterdWatchList);
  }

  useEffect(() =>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage) {
      return
    } 
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  },[])

  return (
    <>
        <BrowserRouter>
            <Navbar/>

            <Routes watchlist={watchlist}>

              <Route path='/' 
                element={
                  <>
                    <Banner />
                    <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchlist} handleRemoveWatchList={handleRemoveWatchList} />
                  </>
                }>  
              </Route>
                
              <Route path='/watchList' element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveWatchList={handleRemoveWatchList}/>}></Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App



// API Key ->f0063221a3305c7d48b96ecf56093054

// API react access token ->eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA2MzIyMWEzMzA1YzdkNDhiOTZlY2Y1NjA5MzA1NCIsInN1YiI6IjY1ZDQzY2VmMGYzNjU1MDE4NmU4YzExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cte4D_jm2EI-is6JlaWUwPTyYB_I0LJVS-MxxtDTZCY

// https://api.themoviedb.org/3/movie/popular?api_key=f0063221a3305c7d48b96ecf56093054&language=en-US&page=2