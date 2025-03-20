import React from 'react'
import Paragraph from '../../components/Paragraph';
// import { Card } from 'keep-react';
import AboutCard from '../../components/AboutCard';
import Subheading from '../../components/Subheading';
import { Card } from 'keep-react';


const About = () => {
  return (
    <div>
      {/* ======banner part start here=== */}
      {/* <section className='py-128px '>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-between'>
            <div>
              <Paragraph className="perastyle text-Dark_blue" text='About us' />
              <h1 className='heading text-Dark_blue'>Our designs solve problems</h1>
              <Paragraph className="perastyle mt-31px  text-Dark_blue w-484px" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
            </div>

            <div>
              <img src="../../../images/about banner.png" alt="img not found" />
            </div>

          </div>


        </div>


      </section> */}

      {/* ======banner part end here=== */}


      {/* ======Who we are part start here=== */}
      <section className=' py-80px bg-#F4F5F5'>
        <div className='max-w-container mx-auto'>
          <div className='flex gap-x-61px items-center'>
            <div >
              <Paragraph className="perastyle text-Dark_blue" text='Who we are' />
              <h2 className='Subheading  text-38px'>Goal focussed</h2>
              <Paragraph className="perastyle w-515px mt-4 text-Dark_blue" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />

            </div>
            <div>
              <h2 className='Subheading  mt-4 text-38px '>Continuous improvement</h2>
              <Paragraph className="perastyle mt-4 w-515px text-Dark_blue" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />

            </div>

          </div>

        </div>

      </section>
      {/* ======Who we are part end here=== */}
      <section bg->
        <div className='max-w-container mx-auto'>
          <img src="../../images/white-board-7413916.png" alt="" />
        </div>
      </section>

      {/* ======process part start here ====  */}
      <section className='py-128px'>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-center'>
            <h2 className='Subheading '>The process we follow</h2>

          </div>
          <div className='flex gap-8 flex-wrap'>
            <AboutCard title="Planning" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
            <AboutCard title="Conception" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
            <AboutCard title="Design" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
            <AboutCard title="Development" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
          </div>


        </div>

      </section>
      {/* ======process part end here ====  */}

      {/* ======mission  part start here ====  */}
      <section className='py-128px bg-#EEF4FA'>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-between'>

            <div>
              <Paragraph className="perastyle text-Dark_blue" text='About us' />
              <h1 className='heading text-38px text-Dark_blue mt-4'>Inspire, Innovate,Share</h1>
              <Paragraph className="perastyle text-Dark_blue  w-623px mt-4" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
            </div>
            <div>
              <picture>
                <img src="./images/our middion 1png.png" alt="not_found" />
              </picture>
            </div>




          </div>

          <div className='flex justify-between mt-24'>


            <div>
              <picture>
                <img src="./images/our middion 1png.png" alt="not_found" />
              </picture>
            </div>

            <div>
              <Paragraph className="perastyle text-Dark_blue" text='About us' />
              <h1 className='heading text-38px text-Dark_blue mt-4'>Inspire, Innovate,Share</h1>
              <Paragraph className="perastyle text-Dark_blue  w-623px mt-4" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
            </div>



          </div>
        </div>

      </section>
      {/* ======mission part end here ====  */}

      {/* =====benifit of working part start here */}

      <section className=' mt-128px mb-152px'>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-center'>
            <Subheading className="Subheading leading-line64 w-630px text-center " title="The benefits of working with us" />
          </div>

          <div className='flex  justify-between mt-48px'>
            <Card className='border-none shadow-none p-48px w-405px'>
              <Card.Header>
                <img src="./images/ourmissionIcon.png" alt="icon" />
              </Card.Header>

              <Card.Content className="p-0 mt-16px">
                <Card.Title>Customize with ease</Card.Title>
                <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </Card.Description>

              </Card.Content>
            </Card>
            <Card className='border-none shadow-none p-48px w-405px'>
              <Card.Header>
                <img src="./images/featuireIcon1.png" alt="icon" />
              </Card.Header>

              <Card.Content className="p-0 mt-16px">
                <Card.Title>Perfectly Responsive</Card.Title>
                <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                </Card.Description>

              </Card.Content>
            </Card>
            <Card className='border-none shadow-none p-48px w-405px'>
              <Card.Header>
                <img src="./images/featuireIcon1.png" alt="icon" />
              </Card.Header>

              <Card.Content className="p-0 mt-16px">
                <Card.Title>Friendly Support</Card.Title>
                <Card.Description className='mt-12px perastyle  font-normal text-Dark_blue w-324.08px'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                </Card.Description>

              </Card.Content>
            </Card>

          </div>

          <div className='mt-48px flex items-center gap-89px'>
            <div>
              <span className='font-Poppins text-38px font-semibold'>100.000+</span>
              <p className='perastyle text-#282938 font-normal leading-line28 '>Finsweet Users</p>
            </div>
            <div className='flex gap-14 '>
              <img className='w-[162px] h-[32px] object-cover	' src="./images/missionLogo 1.png" alt="not_found" />
              <img className='w-[162px] h-[32px] object-cover	' src="./images/missionLogo 2.png" alt="not_found" />
              <img className='w-[162px] h-[32px] object-cover	' src="./images/missionLogo 3.png" alt="not-found" />
              <img className='w-[162px] h-[32px] object-cover	' src="./images/missionLogo 4.png" alt="not_found" />
              <img className='w-[162px] h-[32px] object-cover	' src="./images/missionLogo 5.png" alt="not_found" />
            </div>
          </div>

        </div>

      </section>
      {/* =====benifit of working part end here */}

      {/* ==== meet our team section start */}
      <section className='py-128px bg-#F4F6FC '>
        <div className="max-w-container mx-auto">
          <div className='flex justify-center'>
            <Subheading className="Subheading leading-line64 w-630px text-center mb-3 " title="Meet our team" />
          </div>
          <div className=" flex gap-6">
            <div className="">
              <div className="w-[296px] flex justify-center items-center  h-[344px] bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="h-[168px] rounded-[50%] w-[168px] object-cover">
                    <img src="./images/serious-man-3760373.png" alt="not_foud" />
                  </div>
                  <div className="mt-3">
                    <h3 className="aboutHeading">John Smith</h3>
                    <span className="label font-normal text-#1D2130">CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[296px] flex justify-center items-center  h-[344px] bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="h-[168px] rounded-[50%] w-[168px] object-cover">
                    <img src="./images/serious-man-3760373.png" alt="not_foud" />
                  </div>
                  <div className="mt-3">
                    <h3 className="aboutHeading">John Smith</h3>
                    <span className="label font-normal text-#1D2130">CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[296px] flex justify-center items-center  h-[344px] bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="h-[168px] rounded-[50%] w-[168px] object-cover">
                    <img src="./images/serious-man-3760373.png" alt="not_foud" />
                  </div>
                  <div className="mt-3">
                    <h3 className="aboutHeading">John Smith</h3>
                    <span className="label font-normal text-#1D2130">CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[296px] flex justify-center items-center  h-[344px] bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="h-[168px] rounded-[50%] w-[168px] object-cover">
                    <img src="./images/serious-man-3760373.png" alt="not_foud" />
                  </div>
                  <div className="mt-3">
                    <h3 className="aboutHeading">John Smith</h3>
                    <span className="label font-normal text-#1D2130">CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* ==== meet our team section start */}




    </div>
  )
}

export default About
