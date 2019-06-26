import React from 'react'
import styled from 'styled-components'
import Plank from './Plank'

const StyledTopAside = styled.div`
   grid-area: ta;

   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;

   background: transparent;
`

const TopAside = () => {
   return (
      <StyledTopAside id="styled-top-aside">
         <Plank>
            Top Aside
         </Plank>
      </StyledTopAside>
   )
}

export default TopAside