import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrap ,FooterLink, SocialMedia, SocialMediaWrap, WebsiteRight, SocialIconLinks, SocailIcons, SocailLogo} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink >How it works</FooterLink>
                  <FooterLink to="/signin">Tesitimonials</FooterLink>
                  <FooterLink to="/signin">Carees</FooterLink>
                  <FooterLink to="/signin">Investors</FooterLink>
                  <FooterLink to="/signin">Terms Of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                  <FooterLink to="/signin">Submot Video</FooterLink>
                  <FooterLink to="/signin">Ambassadors</FooterLink>
                  <FooterLink to="/signin">Agency</FooterLink>
                  <FooterLink to="/signin">Influencer</FooterLink>
                  
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to="/signin">Contact</FooterLink>
                  <FooterLink to="/signin">Support</FooterLink>
                  <FooterLink to="/signin">Destination</FooterLink>
                  <FooterLink to="/signin">Sponsharship</FooterLink>
                
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
          <SocialMedia>
            <SocialMediaWrap>
              <SocailLogo to ="/">Dolla</SocailLogo>
              <WebsiteRight>Dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
            </SocialMediaWrap>
            <SocailIcons>
              <SocialIconLinks href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Linkdin"><FaLinkedin/></SocialIconLinks>
            </SocailIcons>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
