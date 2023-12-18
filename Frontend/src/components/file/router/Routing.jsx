import React from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ThankYou from '../../pages/ThankYou'
import Tiramisu from '../../pages/Tiramisu'
import Biryani from '../../pages/Biryani'
import Fam from '../../pages/Fam'
import Rl from '../../pages/Rl'
import Room from '../../pages/Room'
import Bk from '../../pages/Bk'
import { Route, Routes} from 'react-router-dom'
import Frozen_blue from '../../pages/Frozen_blue'


const Routing = () => {
  return (

    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/thank-you' element={<ThankYou/>}></Route>

      <Route exact path='/tiramisu' element={<Tiramisu/>}></Route>
      <Route exact path='/frozen_blue' element={<Frozen_blue/>}></Route>
      <Route exact path='/biryani' element={<Biryani/>}></Route>
      <Route exact path='/fam' element={<Fam/>}></Route>
      <Route exact path='/rl' element={<Rl/>}></Route>
      <Route exact path='/room' element={<Room/>}></Route>
      <Route exact path='/bk' element={<Bk/>}></Route>
    </Routes>
  )
}

export default Routing
