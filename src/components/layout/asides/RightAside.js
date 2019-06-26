import React from 'react'
import styled from 'styled-components'
import Plank from './Plank'
import SocialMedia from './right/SocialMedia'

const StyledRightAside = styled.div`
   grid-area: ra;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-start;

   background: transparent;
`

const RightAside = () => {
   return (
      <StyledRightAside id="styled-right-aside">
         <Plank>
            Right Aside
         </Plank>
      </StyledRightAside>
   )
}

export default RightAside