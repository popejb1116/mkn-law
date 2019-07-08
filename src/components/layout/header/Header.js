import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MobileNavIcon from '../../../aesthetic/images/icons/mobile-nav-icon.svg'
import { DisplayMobileNavContext } from '../../../contexts/DisplayMobileNavContext'

const StyledHeader = styled.div`
   grid-area: h;

   display: flex;
   justify-content: center;
   align-items: center;

   background: ${ props => props.theme.primary };   
   border-bottom: solid 5px ${ props => props.theme.secondary };   
`

const MobileNavButton = styled.button`
   display: none;
   width: 4rem;
   height: 4rem;
   margin-left: 15vw;
   background: transparent;
   border: none;

   transition: transform 1s ease-out;

   &:focus {
      outline: none;
   }

   @media screen and (max-width: 1000px) {
      display: block;
      transform: rotate(${props => props.displayMobileNavbar ? ("540deg") : ("0deg") })
   }
`

const Header = () => {
   const value = useContext(DisplayMobileNavContext)
   return (
      <StyledHeader>
         <Logo />
         <MobileNavButton            
            //TODO: CONFIRM IT'S OK TO USE displayMobileNavbar AS STATE REFERENCE
            onClick = { () => value.toggleMobileNavbar(!value.displayMobileNavbar) }
            displayMobileNavbar = { value.displayMobileNavbar }
         >
            <img src = { MobileNavIcon } alt="nav-icon"/>
         </MobileNavButton>
      </StyledHeader>
   )
}

export default Header