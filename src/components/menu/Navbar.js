import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData";
import "../../../src/styles.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

const siteColor = { "--color": `#dc3545` };

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "" }}>
        <div>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} id="navBar" />
          </Link>
        </div>
        <div
          className={sidebar ? "nav-menu-overlay active " : "nav-menu-overlay "}
          onClick={showSidebar}
        />
        <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
          <ul className="nav-menu-items App ulPadding" onClick={showSidebar}>
            <div className="profile" style={siteColor}>
              <div className="row py-2 px-4">
                <div className="col-4 profilePicture"></div>
                <div className="col-8 profileText">
                  <div>Abdullah Saleh</div>
                  <i id="userStatus">Beiginner</i>
                </div>
              </div>
            </div>

            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} id="liPadding">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="row socialIconsRow marginRight">
              <div className="col-6">
                <a href="https://wa.me/+965 9723 9677">
                  <AiIcons.AiOutlineWhatsApp id="whatsappIcons" />
                </a>
              </div>
              <div className="col-6">
                <a href="tel:+965 9723 9677">
                  <MdIcons.MdCall id="callIcons" />
                </a>
              </div>
            </div>

            <div className="copyrightStyle py-0 ">
              <div className="col-12">
                <div className="row termsStyle marginRight ">
                  <div className="col-5 ">
                    <div>Terms & conditions</div>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5 ">
                    <div>Privacy policy</div>
                  </div>
                </div>
                <div id="copyrightBorder">copyright @ Edartee.com</div>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
