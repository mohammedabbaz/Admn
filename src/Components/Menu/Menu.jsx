import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";

import {VscDashboard} from 'react-icons/vsc'
import {GiBanknote} from 'react-icons/gi'
import {SiGoogleanalytics} from 'react-icons/si'
import {TbCategory2} from 'react-icons/tb'
import {BiLogoProductHunt} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import {PiShoppingCartSimpleDuotone} from 'react-icons/pi'
import {BsKanban,BsCalendarDay} from 'react-icons/bs'
import AppContext from "../../Contexts/AppContext";



export default function Menu() {

  const {setShow } = useContext(AppContext);

  const links = [
    {
      title: "OverView",
      links: [
        {
          title: "App",
          icon: <VscDashboard/>,
          href: "/",
        },
        {
          title: "Analytics",
          icon: <SiGoogleanalytics/>,
          href: "/Analytics",
        },
        {
          title: "Banking",
          icon: <GiBanknote/>,
          href: "/Banking",
        },
      ],
    },
    {
      title: "Management",
      links: [
        {
          title: "Users",
          icon: <HiUserGroup/>,
          href: "/Users",
        },
        {
          title: "Products",
          icon: <BiLogoProductHunt/>,
          href: "/Products",
        },
        {
          title: "Categories",
          icon: <TbCategory2/>,
          href: "/Categories",
        },
        {
          title: "Orders",
          icon: <PiShoppingCartSimpleDuotone/>,
          href: "/Orders",
        },
        {
          title: "Calendar",
          icon: <BsCalendarDay/>,
          href: "/Calendar",
        },
        {
          title: "Karban",
          icon: <BsKanban/>,
          href: "/Karban",
        },
      ],
    },
  ];


  return (
    <div className="">

      {links.map((item) => {
        return (
          
          <div key={item.title} className="listitem ">
            <div className="listTitle">{item.title}</div>

            {item.links.map((link) => {
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => {
                    return " item " + (isActive ? "activeLink" : "");
                  }}

                  onClick={()=>{
                    setShow(false)
                  }}
                >
                  <div className="ico">


                    {link.icon}
                  </div>
                  {link.title}
                </NavLink>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
