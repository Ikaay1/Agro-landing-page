import React from "react";

const Advert = () => {
  return (
    <div className="advertparent">
      <div className="advertflex">
        <div className="advertinfo">
          <h1>Farming got</h1>
          <h1 className="h1">way easier</h1>
          <p>Get access to farm produce right from the from</p>
          <p>and also sell before getting to the market with an easy</p>
          <p>to use app right from the comfort of your home</p>
          <div className="appstore advertstore">
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
        <div className="photos">
          <img className="img2" src="/images/Group 69.png" alt="phone" />
          <img className="img1" src="/images/Group 61.png" alt="phone" />
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="lorems lorem1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          </div>
          <div className="lorems lorem2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <div className="lorems lorem3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="eachstat">
          <div className="firststat">5k</div>
          <div className="secondstat">Download</div>
        </div>
        <div className="eachstat">
          <div className="firststat">1.2k</div>
          <div className="secondstat">Active Farmers</div>
        </div>
        <div className="eachstat">
          <div className="firststat">3k</div>
          <div className="secondstat">Active Users</div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
