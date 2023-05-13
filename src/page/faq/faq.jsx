import React, {useEffect} from "react";
import "./faq.css";
import { faq } from "./faq-data.js";

function Faq() {

  useEffect(() => {
    document.title = 'FAQ - Five Star Estate Liquidations ';
  }, [])

  function handleClick(index){
    const faqWrappers = document.querySelectorAll('.faqWrapper .faqContent');
    const currentFaqWrapper = faqWrappers[index];
    const currentDesc = currentFaqWrapper.querySelector(`.faqDesc${index}`);
    const currentIcon = currentFaqWrapper.querySelector(`#faqIcon${index}`);
  
    // hide all other descriptions
    faqWrappers.forEach((wrapper, i) => {
      if (i !== index) {
        const desc = wrapper.querySelector(`.faqDesc${i}`);
        const icon = wrapper.querySelector(`#faqIcon${i}`);
        desc.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
      }
    });
  
    // show/hide the clicked description
    if(currentDesc.style.display === 'block'){
      currentDesc.style.display = 'none';
      currentIcon.style.transform = 'rotate(0deg)';
    } else {
      currentDesc.style.display = 'block';
      currentIcon.style.transform = 'rotate(90deg)';
    }
  }
  
    
  return (
    <div className="faq">
      <div className="container">
      <h1>FAQ</h1>
        <div className="faqWrapper">
          {faq.map((faq, index) => {
            return (
              <div className="faqContent">
                <div className="faqTitle" onClick={() => handleClick(index)}>
                  <span id={`faqIcon${index}`} class="material-symbols-outlined">arrow_right</span>
                  <h3>{faq.title}</h3>
                </div>
                <p className={`faqDesc${index}`}>{faq.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
