import React from 'react'
import Nav from '../Components/Nav'
import Head from '../Components/Head'
import Footer from '../Components/Footer'
import adm2 from '../Images/avatar_on_about.png'


import img5 from '../Images/contact-hero.jpg'
import User from '../Components/User'
import aboutheader from '../Images/header-hero-1.jpg'


function About() {
  return (
    <div>
  <Nav/>
  <Head id="About us" style={{
        backgroundImage: `url(${aboutheader})`,
      }}/>
        <div>
        <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="text-center mb-12 ">
                        <h2 className="text-3xl  mx-auto lg:w-[60%] text-[#536942]">We’re a highly collaborative and supportive team, coming together on every project to ensure our clients get the very best result.</h2>
                        
                    </div>


                    
                      
                        <div>
        <img  src={img5}className="rounded-lg shadow-lg mb-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-m"/>
                                </div>
                                <div className='p-6 grid grid-cols-1 lg:grid-cols-2 gap-4  text-center'>
                                  <div ><h3 className='lg:w-[80%] text-2xl text-[#536942]' >Our Mission</h3> <br />
                                  <p className='lg:w-[80%] text-[#5c6f50]'>Build the best product that creates the most value for our customers, use business to inspire and implement environmentally friendly solutions.</p></div>
                                  <div> <h3 className='lg:w-[80%] text-2xl text-[#536942]  '>Our Values</h3><br />
                                  <p className='lg:w-[80%] text-[#5c6f50]'>We strive to go above and beyond for our clients no matter the challenge. We aim to deliver our very best work every single day across our services.</p>

                                  </div>
                                  
                       
                    </div>
                </div>
            </section>
        </div>

        <User id="“Love Nature has an amazing team of hard working professionals. It has been a pleasure to meet them.”"
        className={adm2} cls="Emily Davis"/>

        

    <Footer/>
    </div>
  )
}

export default About