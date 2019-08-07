import React from 'react'
import styled from 'styled-components'
import { LinkCollection, StaticLinkWrapper } from '../_StyledComponents'
import facebookIcon from '../../../../aesthetic/images/icons/facebook.svg'
import twitterIcon from '../../../../aesthetic/images/icons/twitter.svg'
import linkedinIcon from '../../../../aesthetic/images/icons/linkedin.svg'


const StyledBottomAside = styled.div`
   grid-area: ba;

   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;

   background: rgba(0, 0, 0, 0.4);
`

const BottomAside = () => {
   return (
      <StyledBottomAside id="styled-bottom-aside">
         <LinkCollection id="social-media-collection">
            <StaticLinkWrapper href="#">
               <img src= { facebookIcon } alt="fb-icon error"/>
            </StaticLinkWrapper>

            <StaticLinkWrapper href="#">
               <img src= { twitterIcon } alt="tw-icon error"/>
            </StaticLinkWrapper>

            <StaticLinkWrapper href="#">
               <img src= { linkedinIcon } alt="lk-icon error"/>
            </StaticLinkWrapper>
         </LinkCollection>
      </StyledBottomAside>
   )
}

export default BottomAside