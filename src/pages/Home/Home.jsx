import React from 'react'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
  <>
      {/* ===banner part start here=== */}
      <section className='bg-[#1C1E53]'>
        <div className='container mx-auto '>
            <div className='main'>
                <div>
                  <div>
                      <h1 className='container w-582px text-[54px] font-bold line74 not-italic text-white font-Poppins	'>Building stellar websites for early startups</h1> 
                  </div>
                  <div>
                    <Paragraph   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
                  </div>

                  <div>
                    <div>
                        <Button className="common_btn bg-red-600" title="View our work"/>
                    </div>
                    <div>
                        <Link to="/Features">View Pricing<FontAwesomeIcon icon={faArrowRightLong} /></Link>
                    </div>
                  </div>

                    



                </div>
                <div></div>
            </div>
           
        </div>
      </section>
  </>
  )
}

export default Home