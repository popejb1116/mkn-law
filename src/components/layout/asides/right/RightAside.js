import React from 'react'
import styled from 'styled-components'
import { StaticLinkWrapper } from '../_StyledComponents'
import facebookIcon from '../../../../aesthetic/images/icons/facebook.svg'
import twitterIcon from '../../../../aesthetic/images/icons/twitter.svg'
import linkedinIcon from '../../../../aesthetic/images/icons/linkedin.svg'

const StyledRightAside = styled.div`
   grid-area: ra;

   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: center;
`

const StyledRightPlank = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   background: rgba(0, 0, 0, 0.4);

   height: 50vh;
   width: 100%;

   /* MARGIN TOP MATCHES CONTENT */
   margin: 2vh 0 0 1vw;

   border: solid 5px white;
   border-radius: 10px;
`

const RightAside = () => {
   return (
      <StyledRightAside id="styled-right-aside">         
         <StyledRightPlank>

            <StaticLinkWrapper href="#">
               <img src= { facebookIcon } alt="fb-icon error"/>
            </StaticLinkWrapper>

            <StaticLinkWrapper href="#">
               <img src= { twitterIcon } alt="tw-icon error"/>
            </StaticLinkWrapper>

            <StaticLinkWrapper href="#">
               <img src= { linkedinIcon } alt="lk-icon error"/>
            </StaticLinkWrapper>

         </StyledRightPlank>        
      </StyledRightAside>
   )
}

export default RightAside