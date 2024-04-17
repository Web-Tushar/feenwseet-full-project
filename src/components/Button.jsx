import React from 'react'

const Button = ({title,text,btnstyle}) => {
  return (
    <>

          <button className='px-[48px] font-Poppins py-[16px] text-white border border-[#F4F6FC33] rounded-[41px]'>{title}</button>

          <button  className=' btnstyle px-[48px] font-Poppins py-[16px] text-[#FCD980] border border-[#F4F6FC33] rounded-[41px]'>{text}</button>

    </>
  )
}

export default Button