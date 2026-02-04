import React, { useEffect, useState } from 'react'
import Dress from './Dress'
import axios from "axios";
import Loading from "./Loading";

const DressContainer = () => {
  

  const [dressList, setDressList] = useState(null)
  

  useEffect(()=>{

   async function fetchData(){
      try {
         const {data} =  await axios.get("https://fake-store-dress-api.onrender.com/api/v1/fashion")
         /**console.log(data.dresses) */
         setDressList(data.dresses)
        
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()

  },[])


  return (
    <div className='w-[80%] min-h-screen py-7 px-10 flex flex-wrap gap-10 relative translate-x-[20%] '>
        {dressList ? (
          
           dressList.map(item=><Dress item={item} key={item._id}/>)
        ):<Loading/>}
    </div>
  )
}

export default DressContainer