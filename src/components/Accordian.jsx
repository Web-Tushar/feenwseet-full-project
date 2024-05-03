import React from 'react'
import { Accordion } from "keep-react";


const Accordian
 = ({headingstyle,paragraphstyle,headingtext,paragraphtext}) => {
  return (
     <>
     
     <Accordion flush={true}>
     <Accordion.Panel>
         <Accordion.Container>
         <Accordion.Title className={headingstyle}>{headingtext}</Accordion.Title>
         <Accordion.Icon />
         </Accordion.Container>
         <Accordion.Content className={paragraphstyle}>{paragraphtext}</Accordion.Content>
     </Accordion.Panel>
     
 </Accordion>
     </>
  )
}

export default Accordian