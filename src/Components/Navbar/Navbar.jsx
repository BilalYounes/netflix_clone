import React from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
// import "../../utilites.scss"
import "./Navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  let scrolled = isScrolled ? "navbar scrolled" : "navbar";
  return (
    <div className={scrolled}>
      <div className="navbar__continer">
        <div className="navbar__left">
          <div className="navbar__logobox">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
              className="navbar__logo"
            />
          </div>
          <ui className="navbar__listItems">
            <li className="navbar__item">Homepage</li>
            <li className="navbar__item">Series</li>
            <li className="navbar__item">Movies</li>
            <li className="navbar__item">New and Popular</li>
            <li className="navbar__item">My List</li>
          </ui>
        </div>
        <div className="navbar__right">
          <div
           
            className="serach u-margin-left-small"
          >
            <Search   onClick={() => setShowSearch(!showSearch)}  />
            {showSearch && (
            <div className="navbar__inputbox">
              <input
                type="text"
                placeholder="Search..."
                className="navbar__input"
              />
            </div>
          )}
          </div>
          
          <div className="navbar__icon-noti  u-margin-left-small">
            <Notifications  />
            <span className="navbar__badg">1</span>
          </div>
          <div className="navbar__profile">
            <div className="navbar__imgbox u-margin-left-small">
              <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="navbar__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
