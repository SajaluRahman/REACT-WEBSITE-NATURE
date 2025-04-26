import React from 'react'
import Nav from '../Components/Nav'
import img1 from '../Images/service-1.jpg'
import img2 from '../Images/service-2.jpg'
import img3 from '../Images/service-3.jpg'
import Divid from '../Components/Divid'
import header from '../Images/header-hero.jpg'
import adm from '../Images/avatar_on_home.png'


import img4 from '../Images/leaf.jpg'

import Footer from '../Components/Footer'
import User from '../Components/User'

function Home() {
    return (
        <div> <div
            className="h-[70vh] bg-cover bg-center relative "
            style={{
                backgroundImage: `url(${header})`,
            }}
        >
            <Nav />


            <div className="flex flex-col justify-center items-center h-full bg-[#2e2e2e42] text-center px-4">

                <h1 className="text-5xl font-bold text-white leading-tight">
                    we all love <br /> <span className="text-yellow-400 text-8xl md:text-9xl ">nature</span>
                </h1>

                <p className="mt-4 text-lg md:text-xl text-white">
                    Look deep into nature, and you will understand everything better.
                </p>

                <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
                    Get Started
                </button>
            </div>
        </div>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
                        <div className="mt-2 w-24 h-1 bg-yellow-500 mx-auto"></div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ml-8" >

                        <div>
                             <Divid id={img1} class=" Web Design"/>
                                </div>

                        <div>
                        <Divid id={img2} class=" Graphic Design"/>
                        </div>
                        
                        <div>
                        <Divid id={img3} class=" Content Creation"/>
                        </div>
                    </div>
                </div>
            </section>

                <User id=" “Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”"
                className={adm} cls="Jane Miller"/>

           


    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-16">
        
        <div className="lg:w-1/2">
          <h4 className="text-sm font-semibold text-[#5c6f50] uppercase mb-2">
            About Us

          </h4>
          <h2 className="lg:text-4xl  text-3xl text-[#263d25] mb-6 leading-snug lg:w-[90%]">
            Tell website visitors who you are and why they should choose your
            business.
          </h2>
          <p className="text-lg text-[#5c6f50] mb-8 lg:w-[70%] ">
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </p>
          <button className="px-6 py-3 bg-white border border-[#263d25] text-[#263d25] font-medium rounded hover:bg-[#263d25] hover:text-white transition">
            Find Out More
          </button>
        </div>

        
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={img4}className="rounded-lg shadow-md"/>
        </div>
      </div>
    </section>

    <section className="flex justify-center items-center  h-auto sm:h-[45vh] bg-[#eaf4f1] bg-bottom bg-cover"style={{ backgroundImage: "url(src/Images/footer-hero-big.jpg)" }}>
  <div className="max-w-5xl mx-auto flex justify-center items-center flex-col px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#536942] mb-4 text-center">
      QUESTIONS?
    </h2>
   
    <p className=" sm:text-lg md:text-xl text-[#8b9e88] mb-8 sm:w-[75%] md:w-[60%] lg:w-[55%] text-center pt-6">
      Whether you’re curious about features, a free trial, or even press, we’re
      here to answer any questions.
    </p>
    
    <button className="px-6 py-3 bg-[#fdd835] text-[#3a5442] font-medium rounded hover:bg-[#fbc02d] hover:text-[#2e3b2f] transition">
      Let’s Talk Now
    </button>
  </div>
</section>



       <Footer/>

        </div>
    )
}

export default Home