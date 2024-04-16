import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav  className='bg-[#1C1E53]'>

       <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
               <div className='w-[122px] h-[28px] object-cover'>
                    <img className='w-[122px] h-[28px] object-cover' src="/images/Finsweet white logo 1.png" alt="not_found" />
               </div>

               <div>
                    <ul className='flex gap-x-[32px]  text-[#BBBBCB]   font-medium text-4'>
                         <li className= ' duration-1000 hover:text-white'>
                              <Link to="/">Home</Link>
                         </li>
                         <li className=' duration-1000 hover:text-white'>
                              <Link to="/about">About us</Link>
                         </li >
                         <li className=' duration-1000 hover:text-white'>
                              <Link to="/Features">Features</Link>

                         </li>
                         <li className='duration-1000 hover:text-white'>
                              <Link to="/Price">Pricing</Link>
                              
                         </li>
                         <li className= 'duration-1000 hover:text-white'>
                              <Link to="/Faq">FAQ</Link>

                         </li>
                         <li className='duration-1000 hover:text-white'>
                              <Link to="/Blog">Blog</Link>

                         </li>
                    </ul>
               </div>
               <div>
                    <button className='px-[48px] py-[16px] text-white border border-[#F4F6FC33] rounded-[41px]'>Contact us</button>
               </div>
               </div>
          
       </div>
   </nav>
  )
}

export default Navbar