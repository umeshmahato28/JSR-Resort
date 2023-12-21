import React from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ThankYou from '../../pages/ThankYou'
import Classic from '../../pages/Classic'
import { Route, Routes} from 'react-router-dom'
import Deluxe from '../../pages/Deluxe'
import Premium from '../../pages/Premium'
import Dualbed from '../../pages/Dualbed'
import Rooms from '../../pages/Rooms'
import Booknow from '../../pages/Booknow'


const Routing = () => {
  return (

    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/thank-you' element={<ThankYou/>}></Route>
      <Route exact path='/deluxe' element={<Deluxe/>}></Route>
      <Route exact path='/premium' element={<Premium/>}></Route>
      <Route exact path='/classic' element={<Classic/>}></Route>
      <Route exact path='/dualbed' element={<Dualbed/>}></Route>
      <Route exact path='/rooms' element={<Rooms/>}></Route>
      <Route exact path='/booknow' element={<Booknow/>}></Route>
    </Routes>
  )
}

export default Routing
