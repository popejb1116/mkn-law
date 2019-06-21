import React from 'react'
import styled from 'styled-components'

const StyledAside = styled.div`
   grid-area: a;
   background: purple;   
`

const Aside = () => {
   return (
      <StyledAside>
         Aside
      </StyledAside>
   )
}

export default Aside