import React from 'react'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import Image from './image'
import {Card } from 'keep-react'



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
                      <Paragraph  className="perastyle mt-24px"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
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
          <div className='container mx-auto flex gap-142px'>
            <div>
                  <h2 className='Subheading'>How we work</h2>
                  <Paragraph className="perastyle text-#282938  mt-16px w-405px"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                

                <div className='mt-16px'>
                    <Link className= ' label text-#2405F2 text-18px  ' to="/about">Get in touch with us<FontAwesomeIcon className='text-#2405F2 ml-2'  icon={faArrowRightLong} /></Link>

                </div>

            </div>
            <div className='card-box flex flex-wrap gap-y-48px '>
                <div className='card_item'>
                    <Card className='border-none shadow-none'>
                        <Card.Header>
                            <img src="./images/pointer 1.png" alt="image"/>
                        </Card.Header>

                        <Card.Content className="p-0 mt-16px">
                            <Card.Title>Strategy</Card.Title>
                            <Card.Description className='mt-8px perastyle  font-normal text-#282938 w-303px'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </Card.Description>
                        
                        </Card.Content>
                    </Card>   
                </div>
                <div className='card_item'>
                    <Card className='border-none shadow-none'>
                        <Card.Header>
                            <img src="./images/pointer 1.png" alt="image"/>
                        </Card.Header>

                        <Card.Content className="p-0 mt-16px">
                            <Card.Title>Wireframing</Card.Title>
                            <Card.Description className='mt-8px perastyle  font-normal text-#282938 w-303px'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </Card.Description>
                        
                        </Card.Content>
                    </Card>   
                </div>
                <div className='card_item'>
                    <Card className='border-none shadow-none'>
                        <Card.Header>
                            <img src="./images/pointer 1.png" alt="image"/>
                        </Card.Header>

                        <Card.Content className="p-0 mt-16px">
                            <Card.Title>Design</Card.Title>
                            <Card.Description className='mt-8px perastyle  font-normal text-#282938 w-303px'>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </Card.Description>
                        
                        </Card.Content>
                    </Card>   
                </div>
                <div className='card_item'>
                    <Card className='border-none shadow-none'>
                        <Card.Header>
                            <img src="./images/pointer 1.png" alt="image"/>
                        </Card.Header>

                        <Card.Content className="p-0 mt-16px">
                            <Card.Title>Development</Card.Title>
                            <Card.Description className='mt-8px perastyle  font-normal text-#282938 w-303px'>
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
                        <h2 className='Subheading'>View our projects</h2>
                    </div>
                    <div>
                        <Link className= ' label text-#282938 text-18px  ' to="/about">View More<FontAwesomeIcon className='text-#282938 ml-2'  icon={faArrowRightLong} /></Link>
                    </div>
                </div>
            </div>

            
      </section>
      {/* =====View our projects end here==== */}

  </>
  )
}

export default Home
                    




                    


