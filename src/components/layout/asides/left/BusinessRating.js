import React from 'react'
import styled from 'styled-components'
import legalEliteIcon from '../../../../aesthetic/images/icons/legal-elite.png'
import superLawyersIcon from '../../../../aesthetic/images/icons/super-lawyers.png'
import preeminentIcon from '../../../../aesthetic/images/icons/preeminent.jpg'

const StyledBuisnessRating = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-evenly;
   align-items: center;

   width: 100%;
   height: 100%;

   @media screen and (max-width: 1000px) {
      flex-flow: row nowrap;
   }
`

const StyledImg = styled.img`

   max-width: 90%;
   height: auto;

   background: transparent;
   color: white;

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