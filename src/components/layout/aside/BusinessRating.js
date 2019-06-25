import React from 'react'
import styled from 'styled-components'
import legalEliteIcon from '../../../aesthetic/images/icons/legal-elite.png'
import superLawyersIcon from '../../../aesthetic/images/icons/super-lawyers.png'
import preeminentIcon from '../../../aesthetic/images/icons/preeminent.jpg'

const StyledBuisnessRating = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`

const StyledImg = styled.img`

   max-width: 90%;
   height: auto;

   background: transparent;
   color: white;

   margin: 0.5rem;
   border: none;
`

const BuisnessRating = () => {
   return(
      <StyledBuisnessRating>
         <StyledImg src = { legalEliteIcon } alt="le"/>
         <StyledImg src = { superLawyersIcon } alt="sl"/>
         <StyledImg src = { preeminentIcon } alt="pre"/>
      </StyledBuisnessRating>
   )
}

export default BuisnessRating