import React from 'react'

function Head(Props) {
  return (
    <div><div className="flex flex-col">
   
    <div
      className="h-[45vh] bg-cover bg-bottom "
      style=
        {Props.style} 
      
    >
      <div className='flex justify-center items-center h-full w-full bg-[#2e2e2e42]'>
      <h1 className="text-5xl md:text-7xl  text-white">
        {Props.id}
      </h1>
      </div>
    </div>


    
  </div></div>
  )
}

export default Head