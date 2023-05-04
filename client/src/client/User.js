import React from 'react';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tshirts from '../pages/Tshirts';
import Jeans from '../pages/Jeans';
import Kids from '../pages/Kids';
import HomeLiving from '../pages/Home&Living';
import Checkout from '../pages/Checkout';
import Spec from '../Product/Spec';
import Add from '../Admin/Add';
import Beauty from '../pages/Beauty';
import Profile from '../pages/Profile';
import { Orders } from '../pages/Orders';
import Cart from '../pages/Cart';
import Spec1 from '../Product/Spec1';

const User = () => {
  return (
    <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Tshirts/' element={<Tshirts/>}/>
    <Route path='/Jeans/' element={<Jeans/>}/>
    <Route path='/Kids' element={<Kids/>}/>
    <Route path='/Home_living' element={<HomeLiving/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Spec/:id' element={<Spec/>}/>
    <Route path='/Spec1/:id' element={<Spec1/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Beauty/' element={<Beauty/>}/>
    <Route path='/Add' element={<Add/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path ='/Orders' element={<Orders/>} />
    <Route path ='/Cart' element={<Cart/>} />
  </Routes>
  <Footer/>
  </BrowserRouter> 
  )
}

export default User