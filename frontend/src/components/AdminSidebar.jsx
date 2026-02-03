import React from 'react'
import { Link,NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className='w-[13%] h-[90vh] pt-20  border-r border-zinc-300 flex flex-col  items-end gap-6'>
       <NavLink style={(e)=>e.isActive?{backgroundColor:"gainsboro"} :{backgroundColor:'transparent'}} to="/admin/add" className=' whitespace-nowrap border p-2 border-zinc-300 w-50'> <i className="ri-add-circle-line"></i> Add Items</NavLink>
       <NavLink style={(e)=>e.isActive?{backgroundColor:"gainsboro"} :{backgroundColor:'transparent'}} to="/admin/allitems" className=' whitespace-nowrap border p-2 border-zinc-300 w-50'> <i className="ri-task-line"></i> List Items</NavLink>
       <NavLink style={(e)=>e.isActive?{backgroundColor:"gainsboro"} :{backgroundColor:'transparent'}} to="/admin/order" className=' whitespace-nowrap border p-2 border-zinc-300 w-50'> <i className="ri-task-line"></i> Orders</NavLink>
    
    </div>
  )
}

export default AdminSidebar