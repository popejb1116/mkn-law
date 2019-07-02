import React from 'react'
import styled from 'styled-components'
import { ResponsiveLinkImg, ResponsiveLinkWrapper } from '../_StyledComponents'
import legalEliteIcon from '../../../../aesthetic/images/icons/legal-elite.png'
import preeminentIcon from '../../../../aesthetic/images/icons/preeminent.jpg'
import superLawyersIcon from '../../../../aesthetic/images/icons/super-lawyers.png'

const StyledLeftAside = styled.div`
   grid-area: la;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: center;
`

const StyledLeftPlank = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   background: rgba(0, 0, 0, 0.4);

   height: 50vh;
   width: 100%;

   /* MARGIN TOP MATCHES CONTENT */
   margin: 2vh 1vw 0 0;

   border: solid 5px white;
   border-radius: 10px;
`

const Aside = () => {
   return (
      <StyledLeftAside id="styled-left-aside">
         <StyledLeftPlank>

            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ legalEliteIcon } alt="error"/>               
            </ResponsiveLinkWrapper>  

            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ superLawyersIcon } alt="error"/>
            </ResponsiveLinkWrapper>

            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ preeminentIcon } alt="error"/>
            </ResponsiveLinkWrapper>            

         </StyledLeftPlank>
      </StyledLeftAside>
   )
}

export default Aside