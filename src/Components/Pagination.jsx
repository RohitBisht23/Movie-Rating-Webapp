import React from 'react'

function Pagination( {pageNo, handlePrevious, handleNext} ) {
  return (
    <div className='bg-gray-400 p-4 m-9 flex justify-center'>
    { pageNo > 1 &&
      <div onClick={handlePrevious} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
    }
        
    <div className='font-bold'>
        {pageNo}
    </div>

    
      <div onClick={handleNext} className='px-8 hover:cursor-pointer '><i class="fa-solid fa-arrow-right"> </i></div>
    </div>
  )
}

export default Pagination
