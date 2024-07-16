import React from 'react'

const AboutCard = ({title,text}) => {
  return (
  
       <div>
           {/* <div>
               <img src={src} alt={alt} />
           </div> */}
           <div className='mt-8'>
               <h2 className="aboutHeading">{title}</h2>
           </div>
           <div className='mt-2'>
               <p className="perastyle font-normal text-Dark_blue w-272px">{text}</p>
           </div>
       </div>
    
  )
}

export default AboutCard