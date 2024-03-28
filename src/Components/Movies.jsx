import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import WatchList from './WatchList'

function Movies({watchlist, handleAddToWatchList, handleRemoveWatchList}) {
  
  const [movies, setMovies] = useState([])

  let [pageNo, setPageNo] = useState(1)

  const handlePrevious = () =>{
    if(pageNo === 1) {
      setPageNo(1)
    } 

    setPageNo(pageNo = pageNo -1);
  }

  const handleNew = () => {
    setPageNo(pageNo +1);
  }

  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f0063221a3305c7d48b96ecf56093054&language=en-US&page=${pageNo}`)
     .then(function (res) {
      console.log(res.data.results);
      setMovies(res.data.results);
     })
  },[pageNo])



  return (
    <div className='p-5'>
        <div className='text-2xl mb-5 text-center font-bold'>
            Tranding Movies
        </div>

        <div className='flex flex-wrap justify-around  item-center gap-4'>
            
            {movies.map((movieObj) =>{
                return <MovieCard 
                       poster_path={movieObj.poster_path} 
                       name={movieObj.title}
                       handleAddToWatchList={handleAddToWatchList}
                       movieObj={movieObj}
                       handleRemoveWatchList={handleRemoveWatchList}
                       watchlist={watchlist}
                       
                      />
            })}
           
        </div>

        <Pagination pageNo = {pageNo} handlePrevious={handlePrevious} handleNext={handleNew}/>

    </div>
  )
}

export default Movies
