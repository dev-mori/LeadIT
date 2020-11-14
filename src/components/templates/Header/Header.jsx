import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./HeaderElements";

const Header = () => {
  return (
    <>
      <Nav>
        <h1>LeadIT</h1>
        <NavMenu>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
