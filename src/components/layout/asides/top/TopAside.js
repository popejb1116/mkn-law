import React from 'react'
import styled from 'styled-components'
import { ResponsiveLinkImg, ResponsiveLinkWrapper, StaticLinkWrapper, LinkCollection, CollectionPartition } from '../_StyledComponents'
import legalEliteIcon from '../../../../aesthetic/images/icons/legal-elite.png'
import preeminentIcon from '../../../../aesthetic/images/icons/preeminent.jpg'
import superLawyersIcon from '../../../../aesthetic/images/icons/super-lawyers.png'
import facebookIcon from '../../../../aesthetic/images/icons/facebook.svg'
import twitterIcon from '../../../../aesthetic/images/icons/twitter.svg'
import linkedinIcon from '../../../../aesthetic/images/icons/linkedin.svg'

const StyledTopAside = styled.div`
   grid-area: ta;

   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;
   align-items: center;

   background: rgba(0, 0, 0, 0.4);

   @media only screen and (max-width: 768px) {
      #collection-partition, #social-media-collection {
         display: none;
      }
   }
`

const TopAside = () => {
   return (
      <StyledTopAside id="styled-top-aside">      

         <LinkCollection>
            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ legalEliteIcon } alt="error"/>               
            </ResponsiveLinkWrapper>  

            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ superLawyersIcon } alt="error"/>
            </ResponsiveLinkWrapper>

            <ResponsiveLinkWrapper href="#">
               <ResponsiveLinkImg src={ preeminentIcon } alt="error"/>
            </ResponsiveLinkWrapper>
         </LinkCollection>

         <CollectionPartition id="collection-partition"/>

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

      </StyledTopAside>
   )
}

export default TopAside