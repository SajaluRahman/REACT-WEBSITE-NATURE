import React from 'react'
import Nav from '../Components/Nav'
import Head from '../Components/Head'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import avtr1 from '../Images/avatar_1.jpg'
import avtr2 from '../Images/avatar_2.jpg'
import avtr3 from '../Images/avatar_3.jpg'
import avtr4 from '../Images/avatar_4.jpg'
function Contact() {
  return (
    <div>
  <Nav/>
        <Head id="Contact us " style={{
        backgroundImage: "url('src/Images/contact-hero-1.jpg')"
      }}/>
<section>

 
<div className="max-w-7xl mx-auto py-12 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div >
          <h2 className="text-4xl text-[#536942] mb-6">You can find us at</h2>

          <div className="my-10">
            <p className="text-sm font-semibold text-gray-700">EMAIL</p>
            <p className="text-gray-600">hello@tyler.com</p>
          </div>

          <div className="my-10">
            <p className="text-sm font-semibold text-gray-700">PHONE NUMBER</p>
            <p className="text-gray-600">202-555-0188</p>
          </div>

          <div className="my-10">
            <p className="text-sm font-semibold text-gray-700">LOCATION</p>
            <p className="text-gray-600">2360 Hood Avenue, San Diego, CA, 92123</p>
          </div>

          <div className="flex space-x-6 mt-6">
            <a  href="#"className="text-gray-500 hover:text-[#536942] transition" >
             <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#536942] transition" >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a  href="#"className="text-gray-500 hover:text-[#536942] transition" >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        
        <div >
          <h2 className="text-4xl  text-[#536942] mb-6">Let's get in touch</h2>

          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                
                className="mt-2 block w-full p-2 border-b border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input type="email"className="mt-2 block w-full p-2 border-b border-gray-300 rounded" placeholder="Enter your email"/>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>  
              <textarea  rows="7"className="mt-2 block w-full p-2 border-b border-gray-300 rounded"placeholder="Enter your message"></textarea>
            </div>

            <button
              type="submit"
              className="w-2/5 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
</section>

    <section>
    <div className="bg-[#f5f7f0] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-4xl  text-[#536942] mb-8">
          We are optimists who love to <br /> work together
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-8 lg:ml-0">
          
          <div>
            <img
              src={avtr1}
              
              className="rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
          
          <div>
            <img
              src={avtr2}
              
              className="rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
          
          <div>
            <img
            src={avtr3}
             
              className="rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
          
          <div>
            <img
             src={avtr4}
             
              className="rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    </section>

      <Footer/>
      </div>
  )
}

export default Contact  