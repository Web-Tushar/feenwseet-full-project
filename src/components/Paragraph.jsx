import React from 'react'

const Paragraph = ({text,title}) => {
  return (
    
    <>
      <p className= 'text-white w-[562px] text-4 not-italic font-Poppins font-medium leading-line28'>{text}</p>
      <p className= 'text-red-400'>{title}</p>
    </>
  )
}

export default Paragraph