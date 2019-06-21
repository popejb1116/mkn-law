import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
   grid-area: n;
   background: red;   
`

const Navbar = () => {
   return (
      <StyledNavbar id="nav">
         Navbar
      </StyledNavbar>
   )
}

export default Navbar