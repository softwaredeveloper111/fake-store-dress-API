import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import AddItem from '../components/AddItem'
import AllItems from '../components/AllItems'
import OrderItems from '../components/OrderItems'

const Routing = () => {
  return (
    <>
       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/admin' Component={Admin}>

         <Route path='/admin/add' Component={AddItem}/>
        <Route path='/admin/allitems' Component={AllItems}/>
        <Route path='/admin/order' Component={OrderItems}/>
        
        </Route>


       
        
       </Routes>
    </>
  )
}

export default Routing