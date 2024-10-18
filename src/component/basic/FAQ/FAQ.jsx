import React, { useState } from 'react';
import './FAQ.css'

const FAQ = () => {
  const Faqs = [
    {
      id:1,
      question: 'What is the check-in time?',
      answer: 'Check-in time is 2 PM. Early check-in is subject to availability.'
    },
    {
      id:2,
      question: 'What is the cancellation policy?',
      answer: 'You can cancel your booking up to 24 hours before arrival without any charges.'
    },
    {
      id:3,
      question: 'Is breakfast included?',
      answer: 'Yes, breakfast is included in the room rate.'
    },
    // Add more FAQs as needed
  ];


  return (
    
    <div className="faq">
      <h2>Frequently Asked Questions (FAQs)</h2>
     <div className="faqitems">
      {
        Faqs.map((faqinner,i)=>{
          return(
            <div className="faqinner">
                <h2>{faqinner.question}</h2>
                <p>{faqinner.answer}</p>
              </div>
            )
           }
          )
         }
    
     
       
      </div>
     
    </div>
    
  );
};

export default FAQ;