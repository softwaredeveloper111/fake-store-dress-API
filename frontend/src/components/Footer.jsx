import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t border-zinc-400 py-4 flex items-center pl-85 mt-20'>
         <div className='flex items-center gap-2 text-blue-300'>
          <i className="ri-facebook-circle-fill text-xl"></i>
         <i className="ri-instagram-line text-xl"></i>
         <i className="ri-twitter-fill text-xl"></i>
         </div>
         <span className='inline-block ml-100 text-sm text-zinc-400'>©2026 Dress Boutiques.All ise reserved</span>
    </div>
  )
}

export default Footer