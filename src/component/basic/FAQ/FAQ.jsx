import React, { useState } from 'react';
import './FAQ.css'

  import { Faqs } from './Faqs';

const FAQ = () => {
  let [showAns,setShowAns]=useState(Faqs[0].id)



  return (
    
    <div className="faq">
      <h2>Frequently Asked Questions (FAQs)</h2>
     <div className="faqitems" id='faq'>
      {
        Faqs.map((faqinner,i)=>{
          return(
            <div className="faqinner">
                     <h2 onClick={()=>setShowAns(faqinner.id)}>{faqinner.id}) {faqinner.question}</h2>
                     <p className={showAns==faqinner.id ?'activeAns' : ''}>{faqinner.answer}</p>
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