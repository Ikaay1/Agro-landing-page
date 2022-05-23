import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div>
        <h1>Subscribe to our newsletter</h1>
        <form>
          <div className="form">
            <input type="text" placeholder="Enter your email address" />
            <div className="subscribe">Subscribe</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
