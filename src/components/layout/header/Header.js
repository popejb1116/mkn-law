import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
   grid-area: h;
   background: blue;   
`

const Header = () => {
   return (
      <StyledHeader>
         Header
      </StyledHeader>
   )
}

export default Header