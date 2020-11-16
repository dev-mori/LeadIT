import React from "react";
import UserIcon from "../icons/user/user";
import { Nav, NavLink, NavBtn, NavBtnLink, Icon } from "./HeaderElements";

const Header = () => {
  return (
    <>
      <Nav>
        <h1>LeadIT</h1>
        <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <Icon>
          <UserIcon />
        </Icon>
      </Nav>
    </>
  );
};

export default Header;
