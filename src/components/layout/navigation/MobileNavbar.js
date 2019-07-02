import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

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
   transform: translateX(0%);
`

const MobileNavbar = () => {
   return (
      <StyledMobileNavbar>
         <Navlinks isDesktop = { false } />
      </StyledMobileNavbar>
   )
}

export default MobileNavbar