import React from "react";

const Faq = () => {
  return (
    <div className="faqparent">
      <div className="faqflex">
        <div className="faq">
          <h1 className="faqhead">FAQ</h1>
          <h3>How do I get access to</h3>
          <h3>investments and what do I need?</h3>
          <div className="pag">
            <div className="pagflex">
              <div className="circle first"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <img className="normal" src="/icons/CaretRight.svg" alt="" />
        <div className="directions">
          <img className="left" src="/icons/CaretRight.svg" alt="" />
          <img className="right" src="/icons/CaretRight.svg" alt="" />
        </div>
      </div>
      <div>
        <div className="round"></div>
        <img src="/images/Group 57.png" className="phone" alt="" />
      </div>
    </div>
  );
};

export default Faq;
