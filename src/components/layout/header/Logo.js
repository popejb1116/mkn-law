import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
   color: whitesmoke;
   font-size: 10vh;
   font-weight: bold;
   text-shadow: 3px 3px 3px black;
`

const Logo = () => {
   return (
      <StyledLogo>
         MKN
      </StyledLogo>
   )
}

export default Logo