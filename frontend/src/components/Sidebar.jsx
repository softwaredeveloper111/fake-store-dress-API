import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return ( 
    <div className='w-[15%] h-[92vh]  flex flex-col justify-center pl-10 fixed top-17 left-0 '>
              
              <h5 className='font-medium text-[16px] text-zinc-900'>CATEGORIES</h5>
              <div className='w-full h-px bg-zinc-300 mt-1 mb-5'></div>
              <div className='flex flex-col gap-3'>

                <div>
                <input className='mr-2 inline-block' type="checkbox"  id='evening-wear'/>
                <label className='cursor-pointer' htmlFor="evening-wear">Evening war</label>
                </div>

                <div>
                <input className='mr-2 inline-block' type="checkbox" id='casual' />
                <label className='cursor-pointer' htmlFor="casual">Casual</label>
                </div>

                <div>
                <input className='mr-2 inline-block' type="checkbox"  id='summer-dresses'/>
                <label className='cursor-pointer' htmlFor="summer-dresses">Summer Dresses</label>
                </div>
              </div>




              <h5 className='font-medium text-[16px] text-zinc-900 mt-7'>PRICE</h5>
              <div className='w-full h-px bg-zinc-300 mt-1 mb-5'></div>
              <div className='flex flex-col gap-2'>
                <Link>Under ₹500</Link>
                <Link>₹500 - ₹1,000</Link>
                <Link>₹1,000 - ₹2,000</Link>
                <Link>₹2,000 - ₹3,000</Link>
                <Link>Over ₹3,000</Link>
              </div>




              <h5 className='font-medium text-[16px] text-zinc-900 mt-7'>BRANDS</h5>
              <div className='w-full h-px bg-zinc-300 mt-1 mb-5'></div>
              <div className='flex flex-col gap-2'>
                <Link>LVMH </Link>
                <Link>Gucci</Link>
                <Link>Dior</Link>
                <Link>Prada</Link>
                <Link>Versace</Link>
              </div>
 



    </div>
  )
}

export default Sidebar