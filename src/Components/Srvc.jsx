import React from 'react'


function Srvc(Props) {
  return (
    <div> 
    <section className="py-16 bg-white">
<div className="max-w-6xl mx-auto  ">

<div className="flex flex-col lg:flex-row items-center lg:space-x-12">
  <img
    src={Props.id}className=" w-[90%] sm:w-1/2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
  <div className="mt-6 lg:mt-0 text-center lg:text-left">
    <h3 className="text-2xl font-semibold text-[#3a5442]">{Props.class}</h3>
    <p className="mt-4 text-lg text-[#3a5442]">
      Tell your visitor how your service can improve their life. Connect
      with the problem that they’re trying to solve and address any
      objections you think they might have.
    </p>
    <p className="mt-4 text-lg font-semibold text-[#3a5442]">From $99</p>
    <button className="mt-4 px-4 py-2 border-2 border-[#3a5442] text-[#3a5442] rounded-lg hover:bg-[#3a5442] hover:text-white transition">
      Start a Project
    </button>
  </div>
</div>




</div>
</section></div>
  )
}

export default Srvc