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
`

const Plank = props => {
   return(
      <StyledPlank>
         { props.children }
      </StyledPlank>
   )
}

export default Plank
