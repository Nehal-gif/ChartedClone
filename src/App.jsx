import React from 'react'
import Header from'./components/Header/Header'
import Footer from './components/Footer/Footer'
import ManageBooking from './components/ManageBooking/ManageBooking'
import Home from './components/Home/Home'
import BusHireForm from './components/Bushire/BusHireForm'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Track from './components/Track/Track'
import Login from './components/Login/Login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

            <Route path='/'  element={<Home/>}></Route>
            <Route path='/ManageBooking' element={<ManageBooking/>}></Route>
            <Route path='/BusHireForm' element={<BusHireForm/>}></Route>
            <Route path='/Track' element={<Track/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>


            
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App


