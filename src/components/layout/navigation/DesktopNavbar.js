import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

const StyledDesktopNavbar = styled.div`
   grid-area: n;
   background: ${ props => props.theme.primary };   
`

const DesktopNavbar = () => {
   return (
      <StyledDesktopNavbar id="styled-DesktopNavbar">
         <Navlinks isDesktop = { true } />
      </StyledDesktopNavbar>
   )
}

export default DesktopNavbar