import React from 'react'
import Movie from "../Movie.png";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3'>
        
        <img className='w-[70px] hover:scale-110 duration-300 hover:cursor-pointer' src={Movie} alt="" />

        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>

        <Link to="/watchList" className='text-blue-500 text-3xl font-bold'>WatchList</Link>
        
    </div>
  )
}

export default Navbar
