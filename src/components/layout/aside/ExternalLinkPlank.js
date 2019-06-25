import React from 'react'
import styled from 'styled-components'
import BusinessRating from './BusinessRating'
import SocialMedia from './SocialMedia'

const StyledExternalLinkPlank = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-around;
   align-items: center;

   width: 90%;
   height: 50vh;

   background: rgba(0, 0, 0, 0.4);

   margin-top: 2rem;

   border: solid 5px white;
   border-radius: 10px;
`

const ExternalLinkPlank = () => {
   return(
      <StyledExternalLinkPlank>
         <BusinessRating />
         <SocialMedia />
      </StyledExternalLinkPlank>
   )
}

export default ExternalLinkPlank
