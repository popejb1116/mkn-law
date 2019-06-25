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
`

const Navlinks = () => {
   return (
      <StyledDesktopLinks >
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
      </StyledDesktopLinks>
   )
}

export default Navlinks