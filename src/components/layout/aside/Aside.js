import React from 'react'
import styled from 'styled-components'
import ExternalLinkPlank from './ExternalLinkPlank'

const StyledAside = styled.div`
   grid-area: a;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: center;

   background: transparent;
`

const Aside = () => {
   return (
      <StyledAside>
         <ExternalLinkPlank />
      </StyledAside>
   )
}

export default Aside