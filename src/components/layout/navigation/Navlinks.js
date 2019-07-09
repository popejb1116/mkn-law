import React, {useContext} from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { DisplayMobileNavContext } from '../../../contexts/DisplayMobileNavContext'

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
      width: 85vw;
      
      color: whitesmoke;

      list-style: none;
   }

   /* li {
      height: 100%;
      width: 100%;
   } */

   .link {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      height: 8vh;
      width: 100%;

      background: transparent;
      color: white;

      padding: 0 0.3rem;
      border-radius: 5px;

      font-size: 2vh;
      font-weight: bolder;
      text-decoration: none;
   }
   .link:focus {
      background: rgba(0, 0, 0, 0.3);
      outline: none;
   }

   .link::after {
      content: '';      
      height: 2px;
      width: 0;
      background: white;
      transition: width 1s;
   }
   .link:hover::after {
      width: 100%;
   }

   @media screen and (max-width: 1200px) {
      .nav-links {
         width: 95vw;
      }
      .link {
         font-size: 1.6vh;
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

const Links = ({pathname, isMobileLink}) => {
   const value = useContext(DisplayMobileNavContext)

   //PREVENT TABBING TO MOBILE LIKS
   let conditionalTabIndex
   if (isMobileLink) {
      conditionalTabIndex = "-1"
   }

   let preventMobileNavbarClose = to => {
      if (to === pathname) {
         return(true)
      } else {
         return(false)
      }
   }

   return (
      <ul className="nav-links">
         <li>
            <Link 
               to="/" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/")) }
               >Home
            </Link>
         </li>
         <li>
            <Link 
               to="/litigation"
               className="link"
               tabIndex = { conditionalTabIndex }
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/litigation")) }
               >Litigation
            </Link>
         </li>
         <li>
            <Link 
               to="/contracts" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/contracts")) }
               >Contracts
            </Link>
         </li>
         <li>
            <Link 
               to="/hr-consulting" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/hr-consulting")) }
               >HR Consulting
            </Link>
         </li>
         <li>
            <Link 
               to="/research" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/research")) }
               >Research
            </Link>
         </li>
         <li>
            <Link 
               to="/attorney-profile" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/attorney-profile")) }
               >Attorney Profile
            </Link>
         </li>
         <li>
            <Link 
               to="/contact-us" 
               className="link"
               tabIndex = { conditionalTabIndex } 
               onClick = { () => value.toggleMobileNavbar(preventMobileNavbarClose("/contact-us")) }
               >Contact Us
            </Link>
         </li>
      </ul>
   )
}

// isDesktop DETERMINES HOW LINKS ARE STYLED, NOT IF THEY ARE DISPLAYED AT ALL, WHICH IS IN CONTEXT 
const Navlinks = props => {
   return props.isDesktop ? 
   (
      <StyledDesktopLinks >
         <Links />
      </StyledDesktopLinks>
   ) : (
      <StyledMobileLinks>
         <Links 
            isMobileLink = { true }
            pathname = { props.location.pathname } 
         />
      </StyledMobileLinks>
   )  
}

export default withRouter(Navlinks)