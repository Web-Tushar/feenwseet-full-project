import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Navbar = () => {
  return (
   <nav  className='bg-#1C1E53 py-4'>

       <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
               <div className='w-122px h-28px object-cover'>
                    <img className='w-122px h-28px object-cover' src="/images/Finsweet white logo 1.png" alt="not_found" />
               </div>

               <div className='flex gap-x-48px justify-between items-center'>
                    <div>
                         <ul className='flex gap-x-32px  text-#BBBBCB font-Poppins   font-medium text-4'>
                              <li className= 'nav_list '>
                                   <Link to="/">Home</Link>
                              </li>
                              <li className=' nav_list'>
                                   <Link to="/about">About us</Link>
                              </li >
                              <li className=' nav_list'>
                                   <Link to="/Features">Features</Link>

                              </li>
                              <li className='nav_list'>
                                   <Link to="/Price">Pricing</Link>
                                   
                              </li>
                              <li className= 'nav_list'>
                                   <Link to="/Faq">FAQ</Link>

                              </li>
                              <li className='nav_list'>
                                   <Link to="/Blog">Blog</Link>

                              </li>
                         </ul>
                    </div>
                    <div>
                         <Button className="common_btn" title="Contact us"/>
                    </div>

               </div>
               </div>
          
       </div>
   </nav>
  )
}

export default Navbar