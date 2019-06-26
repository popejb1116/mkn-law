import React from 'react'
import styled from 'styled-components'
import Plank from './Plank'
import BusinessRating from './left/BusinessRating'

const StyledLeftAside = styled.div`
   grid-area: la;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-end;

   background: transparent;

   margin: 2vh 1vw 0 0;
`

const Aside = () => {
   return (
      <StyledLeftAside id="styled-left-aside">
         <Plank>
            Left Aside
         </Plank>
      </StyledLeftAside>
   )
}

export default Aside