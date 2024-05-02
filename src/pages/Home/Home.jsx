import React from 'react'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import Image from './image'
import {Card } from 'keep-react'
import Subheading from '../../components/Subheading'
import CardHeading from '../../components/CardHeading'
import { Avatar } from "keep-react"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronLeft } from "react-icons/fa"
// import Conatct from '../contact/Contact'
import { Accordion } from "keep-react";



const Home = () => {
  return ( 

  <>
      {/* ===banner part start here=== */}
      <section className='bg-#1C1E53 py-128px  '>
        <div className='container mx-auto '>
            <div className='main flex justify-between items-center'>
                <div>
                    <div>
                        <h1 className='container w-582px text-[54px] font-bold line74 not-italic text-white font-Poppins	'>Building stellar websites for early startups</h1> 
                    </div>
                    <div>
                      <Paragraph  className="perastyle w-562px mt-24px"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
                    </div>

                    <div className='flex items-center gap-40px mt-48px  '>
                          <div>
                              <Button className="common_btn bg-red-600 " title="View our work"/>
                          </div>
                          <div>
                              <Link className='label' to="/Price"> View Pricing <FontAwesomeIcon className='text-white'  icon={faArrowRightLong} /></Link>
                          </div>
                    </div>
                </div>
                <div>
                    <img src="./images/banner.png" alt="not_found" />
                </div>
            </div>
           
        </div>
      </section>
      {/* ===== How we work start here ==== */}
      <section className='work py-128px bg-#F4F6FC'>
          <div className='container mx-auto flex  '>
                <div>
                    <h2 className='Subheading'>How we work</h2>
                    <Paragraph className="perastyle text-Dark_blue  mt-16px w-405px"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                    

                    <div className='mt-16px'>
                        <Link className= ' label text-#2405F2 text-18px  ' to="/about">Get in touch with us<FontAwesomeIcon className='text-#2405F2 ml-2'  icon={faArrowRightLong} /></Link>

                    </div>

                </div>

                <div className='card-box flex flex-wrap   gap-y-48px '>
                    

                        <div className='card_item  '>
                            <Card className='border-none shadow-none shadow-transparent bg-transparent'>
                                <Card.Header>
                                    <img src="./images/pointer 1.png" alt="image"/>
                                </Card.Header>

                                <Card.Content className="p-1 mt-16px">
                                    <Card.Title>Strategy</Card.Title>
                                    <Card.Description className='mt-8px perastyle  font-normal text-Dark_blue '>
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                    </Card.Description>
                                
                                </Card.Content>
                            </Card>   
                        </div>
                        <div className='card_item '>
                            <Card className='border-none shadow-none shadow-transparent bg-transparent '>
                                <Card.Header>
                                    <img src="./images/pointer 1.png" alt="image"/>
                                </Card.Header>

                                <Card.Content className="p-1 mt-16px">
                                    <Card.Title>Wireframing</Card.Title>
                                    <Card.Description className='mt-8px perastyle  font-normal text-Dark_blue '>
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                    </Card.Description>
                                
                                </Card.Content>
                            </Card>   
                        </div>
                    
                        <div className='card_item '>
                            <Card className='border-none shadow-none shadow-transparent bg-transparent'>
                                <Card.Header>
                                    <img src="./images/pointer 1.png" alt="image"/>
                                </Card.Header>

                                <Card.Content className="p-1 mt-16px">
                                    <Card.Title>Design</Card.Title>
                                    <Card.Description className='mt-8px perastyle  font-normal text-Dark_blue '>
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                    </Card.Description>
                                
                                </Card.Content>
                            </Card>   
                        </div>
                        <div className='card_item '>
                            <Card className='border-none shadow-none shadow-transparent bg-transparent'>
                                <Card.Header>
                                    <img src="./images/pointer 1.png" alt="image"/>
                                </Card.Header>

                                <Card.Content className="p-1 mt-16px">
                                    <Card.Title>Development</Card.Title>
                                    <Card.Description className='mt-8px perastyle  font-normal text-Dark_blue '>
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                    </Card.Description>
                                
                                </Card.Content>
                            </Card>   
                        </div>
                </div>
          </div>
      </section>

      
      {/* ===== How we work end here ==== */}

      {/* =====View our projects start here==== */}
      <section className='py-128px bg-white'>  
            <div className='container mx-auto'>
                <div  className='flex justify-between items-center'>
                    <div>
                        <Subheading className="Subheading" title="View our projects"/>
                    </div>
                    <div>
                        <Link className= ' label text-#282938 text-18px  ' to="/about">View More<FontAwesomeIcon className='text-#282938 ml-2'  icon={faArrowRightLong} /></Link>
                    </div>
                </div>
                <div className='mt-64px flex justify-between'>
                       <div className='bg-hero w-843px h-600px  object-cover'>
                        <div style="background: linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);" className='w-396px h-600px  ' >
                            
                            <div className=' pt-312px pl-48px'>
                                <CardHeading className="CardHeading    " title="Workhub office Webflow Webflow Design"/>
                                <Paragraph className="perastyle w-293px mt-16px" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam " />
                                <Link className= ' label text-#FCD980 text-18px  ' to="/about">View More<FontAwesomeIcon className='text-#FCD980 ml-2 mt-40px'  icon={faArrowRightLong} /></Link>
                            </div>




                            

                        </div>

                       </div>
                    <div className='flex flex-col gap-32px'>

                        <div style="background: linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%),url('./images/projectoverlay.png')" 
                        className='w-405px h-284px'>

                            {/* <h3 className='CardHeading'>Unisaas Website Design</h3> */}
                            <div className='w-313px pt-129px pl-56px'>
                                <CardHeading className="CardHeading " title="Unisaas Website Design"/>
                                <div className='mt-10px'>
                                    <Link className= 'label  text-#FCD980 text-18px  ' to="/about">View More<FontAwesomeIcon className='text-#FCD980 ml-2'  icon={faArrowRightLong} /></Link>

                                </div>

                            </div>
                        </div>
                        <div lassName='w-405px h-284px'>
                            <img src="./images/projecardct.png" alt="not_found" />
                        </div>

                    </div>
                </div>
            </div>

            
      </section>
      {/* =====View our projects end here==== */}

      {/* ====feature part start here==== */}
        <section className='bg-__grey py-128px'>
            <div className='container mx-auto'>
                <div className='flex justify-center text-center'>
                    <div  className='w-630px'>
                        <Paragraph className="perastyle text-Dark_blue" text='feature'/>
                        <Subheading className="Subheading  leading-line64" title="Design that solves problems, one product at a time"/>

                    </div>
                </div>
                <div className='card_box flex flex-wrap justify-center  gap-x-32px gap-y-24px'>
                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                    <Card className='border-none shadow-none p-48px w-405px'>
                                    <Card.Header>
                                        <img src="./images/featuireIcon1.png" alt="icon"/>
                                    </Card.Header>

                                    <Card.Content className="p-0 mt-16px">
                                        <Card.Title>Uses Client First</Card.Title>
                                        <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  
                                        </Card.Description>
                                    
                                    </Card.Content>
                    </Card> 

                </div>

            </div>
            
        </section>
      {/* ====feature part end here==== */}

      {/* =====Client part  start here===== */}
     <section className='bg-__grey py-128px'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <Subheading className="Subheading text-38px w-327px text-Dark_blue leading-line56" title="What our clients say about us"/>
                    <Paragraph className="perastyle w-327px mt-16px text-Dark_blue" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.'/>
                </div>
                <div>
                      <Subheading className="Subheading text-32px w-843px leading-line48" title='"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'/>
                      <div className='flex justify-between mt-48px'>
                         <div className='flex items-center gap-x-10px'>
                            <Avatar shape="circle" className='object-cover ' img="/images/woman-.png" />
                            <div>
                                <span className='CardHeading text-Dark_blue'>Jenny Wilson</span>
                                <p className='perastyle text-Dark_blue text-12px'>Vice President</p>

                            </div>
                         </div>
                         <div className='flex gap-x-1'>
                            <div className= ' flex justify-center text-32px items-center bg-red-400 w-80px h-80px rounded-[50%]'><FaChevronLeft /></div>
                            <div className= ' flex justify-center text-32px items-center bg-red-400 w-80px h-80px rounded-[50%]'><FaChevronRight /></div>
                         </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
      {/* ===== Client part end here ===== */}

      {/* ===== Frequently part start here ===== */}
      <section className='py-128px'>
        <div className='container mx-auto'>
            <div className='flex gap-x-109px'>
                <div>
                     <Subheading className="Subheading text-38px leading-line56 w-328px" title='Frequently asked questions'/>
                     <div className='mt-16px'>
                        <Link className= 'label text-#2405F2 text-18px' to="/Contact">Contact us for more info</Link>  
                     </div>

                </div>
                <div>
                    <Accordion flush={true}>
                        <Accordion.Panel>
                            <Accordion.Container>
                            <Accordion.Title className='CardHeading'>1  How much time does it take??</Accordion.Title>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content>
                            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
                            user experience across our products. It simplifies the design and development process by providing
                            ready-to-use components that can be easily customized and integrated into various applications.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                            <Accordion.Title className='CardHeading'>2 What is your class naming convention?</Accordion.Title>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content>
                            The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
                            available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
                            prop when using the component, and it will reflect the chosen color.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                            <Accordion.Title className='CardHeading text-warning-400'>3 How do you communicate?</Accordion.Title>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content>
                            Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
                            message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
                            or icons, within the notification to provide users with more context and options.
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div>
      </section>



      {/* ===== Frequently part end here ===== */}


  </>
  )
}

export default Home