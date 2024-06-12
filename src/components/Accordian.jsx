import React from 'react'
import { Accordion } from "keep-react";


const Accordian
 = ({className,AccordionPera,headingtext,paragraphtext}) => {
  return (
     <>
     
     <Accordion flush={true}>
     <Accordion.Panel>
         <Accordion.Container>
         <Accordion.Title className={className}>{headingtext}</Accordion.Title>
         <Accordion.Icon />
         </Accordion.Container>
         <Accordion.Content className={AccordionPera}>{paragraphtext}</Accordion.Content>
     </Accordion.Panel>
     
 </Accordion>
     </>
  )
}

export default Accordian