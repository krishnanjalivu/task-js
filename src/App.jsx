import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import DeleteVendor from './pages/DeleteVendor'
import ShowVendor from './pages/ShowVendor'
import EditVendor from './pages/EditVendor'
import CreateVendor from './pages/CreateVendor'
import Login from './pages/Login'
const App=()=>{
  return (
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/vendors/create" element={<CreateVendor />}/>
    <Route path="/vendors/details/:id" element={<ShowVendor />}/>
    <Route path="/vendors/edit/:id" element={<EditVendor />}/>
    <Route path="/vendors/delete/:id" element={<DeleteVendor />}/>
   </Routes>
  )
}

export default App
