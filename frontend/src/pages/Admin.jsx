import React  from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {


  return (
    <div className='w-screen min-h-scren flex'>

      <AdminSidebar/>
      <div className='w-[87%]  p-20'>
        <Outlet/>
      </div>

    </div>
  )
}

export default Admin