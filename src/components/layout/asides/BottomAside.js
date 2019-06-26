import React from 'react'
import styled from 'styled-components'
import Plank from './Plank'

const StyledBottomAside = styled.div`
   grid-area: ba;

   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;

   background: transparent;
`

const BottomAside = () => {
   return (
      <StyledBottomAside id="styled-bottom-aside">
         <Plank>
            Bottom Aside
         </Plank>
      </StyledBottomAside>
   )
}

export default BottomAside