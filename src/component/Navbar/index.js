import React ,{useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink 
} from "./NavBarElements";
const Navbar = ({toggle}) => {
const [scrollNav,setScrollNav]=useState(false)

const changeNav = () =>{
  if(window.scrollY>=800){
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
}
useEffect(()=>{window.addEventListener('scroll',changeNav)},[])
   
  return (
    <>
      <Nav scrolNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
          </NavBtn>
          </NavMenu>
        
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
