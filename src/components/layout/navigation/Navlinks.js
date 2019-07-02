import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDesktopLinks = styled.nav`   
   display: flex;
   justify-content: center;
   height: 100%;

   .nav-links {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;

      height: 100%;
      width: 60vw;
      
      color: whitesmoke;

      list-style: none;
   }

   .link {
      color: white;
      font-size: 2vh;
      font-weight: bolder;
      text-decoration: none;
   }

   @media screen and (max-width: 1200px) {
      .nav-links {
         width: 70vw;
      }
      .link {
         font-size: 1.8vh;
      }
   }
`

const StyledMobileLinks = styled.nav`
   .nav-links {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;

      height: 75vh;

      list-style: none;
   }

   .link {
      color: white;
      font-size: 2vh;
      font-weight: bolder;
      text-decoration: none;
   }
`

const Links = () => {
   return (
      <ul className="nav-links">
         <li>
            <Link to="/" className="link">Home</Link>
         </li>
         <li>
            <Link to="/litigation" className="link">Litigation</Link>
         </li>
         <li>
            <Link to="/contracts" className="link">Contracts</Link>
         </li>
         <li>
            <Link to="/hr-consulting" className="link">HR Consulting</Link>
         </li>
         <li>
            <Link to="/research" className="link">Research</Link>
         </li>
         <li>
            <Link to="/attorney-profile" className="link">Attorney Profile</Link>
         </li>
         <li>
            <Link to="/contact-us" className="link">Contact Us</Link>
         </li>
      </ul>
   )
}

// isDesktop DETERMINES HOW, NOT IF, MOBILE NAV IS DISPLAYED
const Navlinks = props => {
   return props.isDesktop ? 
   (
      <StyledDesktopLinks >
         <Links />
      </StyledDesktopLinks>
   ) : (
      <StyledMobileLinks>
         <Links />
      </StyledMobileLinks>
   )  
}

export default Navlinks