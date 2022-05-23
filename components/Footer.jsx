import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/images/logo.png" alt="" />
      <div className="footerflex">
        <div className="social">
          <div className="twitter">
            <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/twitter.png" />
            <span>smart agro</span>
          </div>
          <div className="whatsapp">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/whatsapp--v1.png" />
            <span>08023234532 08134517782</span>
          </div>
          <div className="facebook">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png" />
            <span>Smart agro ltd</span>
          </div>
          <div className="linkedin">
            <img src="https://img.icons8.com/ios/50/ffffff/linkedin.png" />
            <span>Smart agro limited</span>
          </div>
          <div className="instagram">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png" />
            <span>smart agro</span>
          </div>
        </div>
        <div className="company">
          <h3>Company</h3>
          <div className="compabout">About us</div>
          <div className="compfeatures">Features</div>
          <div>Newsletter</div>
        </div>
        <div className="support company">
          <h3>FAQ</h3>
          <div className="compfeatures">Features</div>
          <div>Contact</div>
        </div>
        <div className="contact company">
          <h3>Contact</h3>
          <div className="compfeatures">smartagro@gmail.com</div>
          <div>Customersupport@smartagro.com</div>
        </div>
      </div>
      <div className="appstore relate">
        <img
          src="https://manners4minors.com/wp-content/uploads/2016/06/app-store-badge.png"
          alt="apple logo"
          className="apple"
        />
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png"
          alt="playstore logo"
          className="playstore"
        />
      </div>
    </div>
  );
};

export default Footer;
