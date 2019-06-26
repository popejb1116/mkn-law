import React from 'react'
import styled from 'styled-components'
import Plank from '../Plank'
import BusinessRating from './BusinessRating'

const StyledLeftAside = styled.div`
   grid-area: la;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-end;

   background: transparent;

   margin-right: 0.75rem;

   @media screen and (max-width: 1000px) {
      flex-flow: row nowrap;
      margin-right: 0rem;
   }
`

const Aside = () => {
   return (
      <StyledLeftAside>
         <Plank>
            <BusinessRating />
         </Plank>
      </StyledLeftAside>
   )
}

export default Aside