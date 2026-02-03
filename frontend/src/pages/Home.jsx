import React from 'react'
import Sidebar from "../components/Sidebar";
import DressContainer from "../components/DressContainer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="flex  overflow-y-auto">
        <Sidebar/>
        <DressContainer/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home