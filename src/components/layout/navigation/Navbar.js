import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

const StyledNavbar = styled.div`
   grid-area: n;
   background: ${ props => props.theme.primary };   
   border-top: solid 5px ${ props => props.theme.accent };   
`

const Navbar = () => {
   return (
      <StyledNavbar id="styled-navbar">
         <Navlinks />
      </StyledNavbar>
   )
}

export default Navbar