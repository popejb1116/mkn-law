import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
   grid-area: f;
   background: orange;   
`

const Footer = () => {
   return (
      <StyledFooter>
         Footer
      </StyledFooter>
   )
}

export default Footer