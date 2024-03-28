import React, { useState } from 'react'
import { useEffect } from 'react'
import Movie from '../Movie.png'
import GenreId  from '../Utility/Genre.js'

function WatchList({ watchlist, setWatchlist,  handleRemoveWatchList }) {
  
  let [genreList, setGenreList] = useState(["All Genres"])

  let [currGenre, setCurrGenre] = useState("All Genres")

  const [search, setSearch] = useState('');

  let handleSearch = (event) =>{
    // console.log('Search working');
    setSearch(event.target.value);
  }

  let sortIncreaseOrder = () =>{
    console.log("Increasing Order")
    let result = watchlist.sort((movieA, movieB) =>{
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchlist([...result])
  }

  let sortDecreaseOrder = () =>{
    console.log("Decreasing Order")
    let result = watchlist.sort((movieA, movieB) =>{
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchlist([...result])
    
  }

  let sortPopularityDecreaseOrder = () =>{
    console.log('Popularity sorted')
  }

  let sortPopularityIncreaseOrder = () =>{
    console.log('Popularity sorted')
  }

  //For genre based filtering
  useEffect(() =>{
    let temp = watchlist.map((movieObj) =>{
      return GenreId[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  },[watchlist])

  let handleFilter = (genre) =>
  {
    setCurrGenre(genre);
  }

  return (
    <>
      <div className='flex justify-center flex-wrap m-4 cursor-pointer'>
        {
          genreList.map((genre) =>{
            return <div onClick={() => handleFilter(genre)} className={currGenre === genre? "flex justify-center  h-[3rem] w-[9rem] rounded-xl bg-blue-400 border text-white font-bold items-center mx-3" : "flex justify-center  h-[3rem] w-[9rem] rounded-xl bg-gray-300 border text-white font-bold items-center mx-3"}>
                    {genre}
                  </div>
          })
        }
      </div>

      <div className='flex justify-center my-4'>
        <input type="text"
          placeholder='Search Movies'
          className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr className=''>
              <th>Name</th>
              <div className='flex justify-center gap-2 cursor-pointer'>
                <div onClick={sortIncreaseOrder} ><i class='fa-solid fa-arrow-up'></i></div>
                <th>Ratings</th>
                <div onClick={sortDecreaseOrder} ><i class='fa-solid fa-arrow-down'></i></div>
              </div>
              {/* <div className='flex justify-center'>
                <div onClick={sortPopularityIncreaseOrder} ><i class='fa-solid fa-arrow-up'></i></div> */}
                <th>Popularity</th>
                {/* <div onClick={sortPopularityDecreaseOrder} ><i class='fa-solid fa-arrow-down'></i></div>
              </div> */}
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>

          <tbody>
            {
              watchlist.filter((obj) =>{
                if(currGenre == "All Genres") {
                  return true
                } else {
                  return GenreId[obj.genre_ids[0]] === currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
              }).map((movieObj) => (
                <tr className='border-b-2'>
                  <td className='flex item-center px-6 py-4'>
                    <img
                      className='h-[8rem] w-[8rem]'
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className='mx-8 py-8'>{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{GenreId[movieObj.genre_ids[0]]}</td>
                  <td>{movieObj.release_date}</td>
                  <td onClick={()=>handleRemoveWatchList(movieObj)} className='text-red-800 cursor-pointer'>Delete</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
