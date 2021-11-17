import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome style={{ color: "black" }} />,
    cName: "nav-text"
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <RiIcons.RiFileListLine style={{ color: "black" }} />,
    cName: "nav-text"
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <BsIcons.BsCart4 style={{ color: "black" }} />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile style={{ color: "black" }} />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdContactPhone style={{ color: "black" }} />,
    cName: "nav-text"
  }

  // {
  //   title: "Reports",
  //   path: "/reports",
  //   icon: <IoIcons.IoIosPaper style={{ color: "black" }} />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Products",
  //   path: "/products",
  //   // icon: <FaIcons.FaCartPlus style={{ color: "black" }} />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Team",
  //   path: "/team",
  //   icon: <IoIcons.IoMdPeople style={{ color: "black" }} />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Messages",
  //   path: "/messages",
  //   // icon: <FaIcons.FaEnvelopeOpenText style={{ color: "black" }} />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle style={{ color: "black" }} />,
  //   cName: "nav-text"
  // }
];
