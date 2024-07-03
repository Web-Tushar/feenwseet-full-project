import React from 'react'
import Paragraph from '../../components/Paragraph';


const About = () => {
  return (
    <div>
      {/* ======banner part start here=== */}
        <section className='py-128px '>
            <div className='max-w-container mx-auto'>
              <div className='flex justify-between'>
                  <div>
                      <Paragraph className="perastyle text-Dark_blue" text='About us'/>
                      <h1 className='heading text-Dark_blue'>Our designs solve problems</h1>
                      <Paragraph className="perastyle mt-31px text-Dark_blue w-484px" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                  </div>

                  <div>
                      <img src="../../images/about banner.png" alt="" />
                  </div>

              </div>


            </div>


        </section>

      {/* ======banner part end here=== */}


      {/* ======Who we are part start here=== */}
      <section className=' py-80px bg-#F4F5F5'>
         <div className='max-w-container mx-auto'>
          <div className='flex gap-x-61px items-center'>
              <div >
               <Paragraph className="perastyle text-Dark_blue" text='Who we are'/>
                <h2 className='Subheading  text-38px'>Goal focussed</h2>
                <Paragraph className="perastyle w-515px mt-4 text-Dark_blue" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

              </div>
              <div>
                <h2 className='Subheading  mt-4 text-38px '>Continuous improvement</h2>
                <Paragraph className="perastyle mt-4 w-515px text-Dark_blue" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

              </div>

          </div>

         </div>

      </section>
      {/* ======Who we are part end here=== */}
      <section bg->
          <div className='max-w-container mx-auto'>
              <img  src="../../images/white-board-7413916.png" alt="" />
          </div>
      </section>

      {/* ======process part start here ====  */}
      <section className='py-128px'>
         <div className='max-w-container mx-auto'>
          <div className='flex justify-center'>
            <h2 className='Subheading '>The process we follow</h2>

          </div>
            

         </div>

      </section>
      {/* ======process part end here ====  */}


      
    </div>
  )
}

export default About
