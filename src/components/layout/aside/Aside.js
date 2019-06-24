import React from 'react'
import styled from 'styled-components'
import SocialMediaPlank from './SocialMediaPlank'

const StyledAside = styled.div`
   grid-area: a;

   display: flex;
   flex-flow: column nowrap;
   justify-content: space-around;
   align-items: center;

   background: transparent;
`

const Aside = () => {
   return (
      <StyledAside>
         <SocialMediaPlank />
      </StyledAside>
   )
}

export default Aside