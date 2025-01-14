import React from 'react'
import quotes from '../Images/quotes.svg'


function User(Props) {
  return (
    <div><section className='p-16 bg-[#f6f8f5] flex justify-center items-center'>
    <div className='lg:w-[50%] flex justify-center items-center flex-col'>
    
       <img src={quotes} alt="" /><br />
       <p className='lg:text-[30px] text-center text-[#536942]'>
      {Props.id}
       
     </p><br />
     <img src={Props.className} alt="" width={60} />
     <p className='pt-2'>{Props.cls}</p>

    </div>
</section></div>
  )
}

export default User