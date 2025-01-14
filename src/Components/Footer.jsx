import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div><section className='lg:h-[10vh]  w-full flex justify-center items-center'>
    <div className='h-full w-[70%] flex justify-center items-center'>
        <div className='  h-full w-full  flex justify-between flex-col lg:flex-row items-center'>
            <div> <div className={`flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0   w-full lg:w-auto text-center py-6 lg:py-0 `}>
            <Link to="/" className="hover:underline text-[#536942]">
              Home
            </Link>
            <Link to="/About" className="hover:underline text-[#536942]">
              About
            </Link>
            <Link to="/Services" className="hover:underline text-[#536942]">
              Services
            </Link>
            <Link to="/Contact" className="hover:underline text-[#536942]">
              Contact
            </Link>
          </div></div>
            <div> <div className="flex items-center space-x-2">
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-[#536942] font-bold">
            N
          </div>
          <span className="text-[#536942] font-semibold text-lg">Nature</span>
        </div></div>
            <div className='text-[#536942] mt-6 lg:mt-0 '>Love Nature by Tyler Moore</div>
        </div>

    </div>
</section></div>
  )
}

export default Footer