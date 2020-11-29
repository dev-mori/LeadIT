import React from "react";
import UserIcon from "../icons/user/user";
import { Nav, NavLink, NavBtn, NavBtnLink, Icon, HT } from "./HeaderElements";
import logo from "../../pages/img/logo.png"

const Header = () => {
  return (
    <>
      <Nav> 
        <img src={logo} width="280px"/>
       <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <Icon>
          <UserIcon fontSize="large" />
        </Icon>
      </Nav>
    </>
  );
};




export default Header;
