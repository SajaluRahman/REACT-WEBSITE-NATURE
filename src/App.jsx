import React from 'react'
import { BrowserRouter as  Router, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {
  return (
    <div> 

       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
       </Router>


  </div>
  )
}

export default App