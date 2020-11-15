import React from "react";
import { FooterParent, FooterWrapper } from "./FooterElements";
import Icon from "../icons/";

const Footer = () => {
  return (
    <>
      <FooterParent>
        <FooterWrapper>
          <Icon className="fas fa-heart" />
          <Icon className="fas fa-bolt" />
        </FooterWrapper>
      </FooterParent>
    </>
  );
};

export default Footer;
