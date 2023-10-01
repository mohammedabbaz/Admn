import React, { useContext } from "react";
import "./navBar.scss";
import translate from "../../Assets/Icons/translate.png";
import search from "../../Assets/Icons/search.png";
import notification from "../../Assets/Icons/notification.png";
import logo from "../../Assets/Images/logo.png";

import { HiMenuAlt1 } from "react-icons/hi";
import AppContext from "../../Contexts/AppContext";

function NavBar() {
  const { isMenuActive, setMenuActive } = useContext(AppContext);
  const { show, setShow } = useContext(AppContext);
 
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="" className="logoimg" />

        <HiMenuAlt1
          className="menu"
          onClick={() => {
            setMenuActive(!isMenuActive);
            setShow(!show);
           
          }}
        />
        <HiMenuAlt1
          className="menu1"
          onClick={() => {
            setMenuActive(!isMenuActive);
     
           
          }
        }
        />
      </div>
      <div className="links">
        
        <img src={search} alt="" className="icon search" />
        <img src={translate} alt="" className="icon" />
        <div className="notification_pill">
          <img src={notification} alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://avatars.hsoubcdn.com/5c2eaaa23d7b1a7166baa1b6dc10d2f2?s=128"
            alt=""
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
