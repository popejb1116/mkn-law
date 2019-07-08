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

   @media screen and (max-width: 1000px) {
      display: block;
   }
`

const Header = () => {

   const value = useContext(DisplayMobileNavContext)
   const currentlyDisplayingMobileNav = value.displayMobileNavbar

   return (
      <StyledHeader>
         <Logo />
         <MobileNavButton            
            onClick = {() => value.toggleMobileNavbar(!currentlyDisplayingMobileNav) }   
         >
            <img src = { MobileNavIcon } alt="nav-icon"/>
         </MobileNavButton>
      </StyledHeader>
   )
}

export default Header