import React from 'react'
import styled from 'styled-components'

const StyledPlank = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   width: 90%;
   height: 50vh;

   background: rgba(0, 0, 0, 0.4);

   margin-top: 2rem;

   border: solid 5px white;
   border-radius: 10px;

   @media screen and (max-width: 1000px) {
      flex-flow: row nowrap;
      width: 100%;
      height: 100%;
      margin-top: 0;

      border: none;
      border-radius: 0px;
   }
`

const Plank = props => {
   return(
      <StyledPlank id="styled-plank">
         { props.children }
      </StyledPlank>
   )
}

export default Plank
