import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="navflex">
      <div className="logo">
        <img src="/images/Logo-1.png" alt="logo" />
      </div>
      <div className="navitems">
        <div className="link">
          <Link href="/">Home</Link>
        </div>
        <div>About</div>
        <div>Features</div>
        <div>FAQ</div>
        <div>Contact</div>
      </div>
      <div className="register">
        <div className="login">Login</div>
        <div className="signup">Sign up</div>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#064420"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Features
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
