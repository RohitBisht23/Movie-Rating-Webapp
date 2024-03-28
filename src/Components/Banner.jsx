import React from 'react'

function Banner() {
  
  return (
    <div  className=" h-[20] md:h-[60vh] bg-cover bg-center flex items-end" style={{backgroundImage:`url("data:image/jpeg;base64,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")`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-3'>
            Avengeres
        </div>
    </div>
  )
}

export default Banner