import React from 'react'
import Nav from '../Components/Nav'
import Head from '../Components/Head'
import Footer from '../Components/Footer'
import imgs1 from '../Images/service-1 (1).jpg'
import imgs2 from '../Images/service-2 (1).jpg'
import imgs3 from '../Images/service-3 (1).jpg'
import Srvc from '../Components/Srvc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward,faStar,faArrowsRotate,faLifeRing } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div>
  <Nav/>
  <Head id="Our services" style={{
        backgroundImage: "url('src/Images/services-hero.jpg')"
      }}/>
       
            <Srvc id={imgs1} class="Web Design"/>
            <Srvc id={imgs2} class="Graphic Design"/>
            <Srvc id={imgs3} class="Content Creation"/>


            <section class="py-16 bg-[#f7f9f7]">
  <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
    <div class="lg:w-1/2 px-4 lg:px-0">
      <h2 class="text-3xl font-serif text-[#3a5442]  mb-4  text-[#536942]">Why Love Nature</h2>
      <p class="text-lg text-[#5c6f50] leading-relaxed mb-6">
        Your customers just learned what services you offer. Tell them why they should work with you or your team, for example, you could highlight your experience and positive client reviews.
        <br /><br />
        The badges illustrate this. We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.
      </p>
    </div>
    <div class="lg:w-1/2 grid grid-cols-2 gap-8 text-center  text-[#536942]">
      <div>
        <div class="flex justify-center items-center w-20 h-20 mx-auto bg-[#dfece6] rounded-full">
        <FontAwesomeIcon icon={faAward} className='h-3/5 text-[#536942]' />
        </div>
        <p class="mt-4 text-[#3a5442] text-lg font-medium">8 Years Experience</p>
      </div>
      <div>
        <div class="flex justify-center items-center w-20 h-20 mx-auto bg-[#dfece6] rounded-full">
        <FontAwesomeIcon icon={faStar} className='h-3/5  text-[#536942]' />
        </div>
        <p class="mt-4 text-[#3a5442] text-lg font-medium">5 Star Rating</p>
      </div>
      <div>
        <div class="flex justify-center items-center w-20 h-20 mx-auto bg-[#dfece6] rounded-full">
        <FontAwesomeIcon icon={faArrowsRotate} className='h-3/5  text-[#536942]' />
        </div>
        <p class="mt-4 text-[#3a5442] text-lg font-medium">Quick Turnaround</p>
      </div>
      <div>
        <div class="flex justify-center items-center w-20 h-20 mx-auto bg-[#dfece6] rounded-full">
        <FontAwesomeIcon icon={faLifeRing} className='h-3/5  text-[#536942]' />
        </div>
        <p class="mt-4 text-[#3a5442] text-lg font-medium">Dedicated Support</p>
      </div>
    </div>
  </div>
</section>


        
            <Footer/>
    </div>
  )
}

export default Services