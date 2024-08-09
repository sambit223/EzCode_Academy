import React, { useState } from 'react'

const Test = () => {
    const [open,setOpen]=useState(null);
    const faqData = [
        {
          question: "What is your return policy?",
          answer: "Our return policy allows returns within 30 days of purchase.",
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping typically takes 3-5 business days.",
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we offer international shipping to selected countries.",
        },
        {
          question: "How can I track my order?",
          answer: "You can track your order using the tracking link in your email.",
        },
      ];
    const clickHandler=(index)=>{
  setOpen(open === index ? null:index)
    }
  return (
    <div className='flex flex-col gap-5'>
     {faqData.map((item,index)=>(
        <div key={index}>
            <div className='cursor-pointer' onClick={()=>clickHandler(index)}>{item.question}</div>
            {open === index && <div>{item.answer}</div>}
        </div>
     ))}
    </div>
  )
}

export default Test
