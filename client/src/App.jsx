import React from 'react'
import Header from './components/common/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes ,Route} from 'react-router-dom'

export default function App() {
  return <>
  
  <Header/>
 
  <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='signup' element={<Signup/>}/>


  </Routes>
  </> 
}
