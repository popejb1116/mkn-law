import React, { useContext } from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'
import { DisplayMobileNavContext } from '../../../contexts/DisplayMobileNavContext'

const StyledMobileNavbar = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   background: ${ props => props.theme.primary };

   height: auto;
   width: 50vw;

   box-shadow: -3px 3px 5px white;

   position: absolute;
   left: 50vw;
   top: 12vh;
   z-index: 1;

   transition: transform 1s;
   transform: translateX(${ props => props.displayMobileNavbar ? ("0%") : ("100%") });
`

const MobileNavbar = () => {
   const value = useContext(DisplayMobileNavContext)
   return (
      <StyledMobileNavbar displayMobileNavbar = { value.displayMobileNavbar }>
         <Navlinks isDesktop = { false } />
      </StyledMobileNavbar> 
   )
}

export default MobileNavbar