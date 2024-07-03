import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import Paragraph from '../components/Paragraph'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
     <footer>
          <section className='pt-80px bg-#1C1E53'>
        <div className='max-w-container mx-auto mt-128px' >
            <div className='flex gap-142px'>
                <div>
                    <div >
                        <div className='w-122px h-28px object-cover'>
                        <img className='w-122px h-28px object-cover' src="/images/Finsweet white logo 1.png" alt="not_found" />
                        </div>
                        <div>
                        <Paragraph className="perastyle font-normal w-399px mt-22px " text="We are always open to discuss your project and improve your online presence."/> 
                        </div>
                    </div>
                    <div className=' w-517px pt-18px px-37px pb-16px  flex gap-29px bg-#FCD980 mt-86px '>
                        <div>
                            <h3 className='AccordionPera'>Email me at</h3>
                            <p>contact@website.com</p>

                        </div>
                        <div>
                            <h3 className='AccordionPera'>Call us</h3>
                            <span>0927 6277 28525</span>

                        </div>

                    </div>
                </div>
                <div className='mt-2'>
                    <div className=''>
                        <h2 className='Subheading text-white '>Lets Talk!</h2>
                        <Paragraph className="perastyle w-399px mt-14px font-normal" text="We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."/>

                    </div>
                    <div className='mt-4 flex gap-6' >
                        <a href="#"><CiFacebook  className='text-white'/></a>
                        <a href="#"><FaTwitter  className='text-white'/></a>
                        <a href="#"><CiInstagram  className='text-white'/></a>
                        <a href="#"><FaLinkedin  className='text-white'/></a>
                    </div>
                </div>
            </div>


        </div>

        

          </section>
          {/* ====footer====  */}
          <section className='py-32px'>
            <div className='max-w-container mx-auto'>
              <div className='flex justify-between items-center'>
                  <div>
                    <p>Copyright 2022, Finsweet.com</p>
                  </div>
                   <div>
                        <ul className='flex gap-x-32px  text-#282938 font-Poppins   font-medium text-4'> 
                              <li className= 'footer_list '>
                                   <Link to="/">Home</Link>
                              </li>
                              <li className=' footer_list'>
                                   <Link to="/about">About us</Link>
                              </li >
                              <li className=' footer_list'>
                                   <Link to="/Features">Features</Link>

                              </li>
                              <li className='footer_list'>
                                   <Link to="/Price">Pricing</Link>
                                   
                              </li>
                              <li className= 'footer_list'>
                                   <Link to="/Faq">FAQ</Link>

                              </li>
                              <li className='footer_list'>
                                   <Link to="/Blog">Blog</Link>

                              </li>
                        </ul>
                   </div>

              </div>

            </div>

          </section>
     </footer>    
  )
}

export default Footer