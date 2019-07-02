import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

const StyledNavbar = styled.div`
   grid-area: n;
   background: ${ props => props.theme.primary };   
`

const Navbar = () => {
   return (
      <StyledNavbar id="styled-navbar">
         <Navlinks />
      </StyledNavbar>
   )
}

export default Navbar