import React from 'react'
import styled from 'styled-components'
import Plank from '../Plank'
import SocialMedia from './SocialMedia'

const StyledLeftAside = styled.div`
   grid-area: ra;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-start;

   background: transparent;

   margin-left: 0.75rem;
`

const Aside = () => {
   return (
      <StyledLeftAside>
         <Plank>
            <SocialMedia />
         </Plank>
      </StyledLeftAside>
   )
}

export default Aside