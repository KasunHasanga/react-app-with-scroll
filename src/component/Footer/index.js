import React from "react";
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrap ,FooterLink} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Tesitimonials</FooterLink>
                  <FooterLink to="/signin">Carees</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms Of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Tesitimonials</FooterLink>
                  <FooterLink to="/signin">Carees</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms Of Services</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Tesitimonials</FooterLink>
                  <FooterLink to="/signin">Carees</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms Of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Tesitimonials</FooterLink>
                  <FooterLink to="/signin">Carees</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms Of Services</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
