import React from 'react'
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

   position: absolute;
   left: 50vw;
   top: 12vh;
   z-index: 1;

   transition: transform 1s;
   transform: translateX(${ props => props.displayMobileNavbar ? ("0%") : ("100%") });

   overflow-x: hidden;
`

const MobileNavbar = () => {
   return (
      <DisplayMobileNavContext.Consumer>
         { context => (
            <StyledMobileNavbar displayMobileNavbar = { context.displayMobileNavbar }>
               <Navlinks isDesktop = { false } />
            </StyledMobileNavbar>            
         )}      
      </DisplayMobileNavContext.Consumer>
   )
}

export default MobileNavbar