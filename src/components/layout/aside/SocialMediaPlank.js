import React from 'react'
import styled from 'styled-components'
import legalEliteIcon from '../../../aesthetic/images/icons/legal-elite.png'
import superLawyersIcon from '../../../aesthetic/images/icons/super-lawyers.png'
import preeminentIcon from '../../../aesthetic/images/icons/preeminent.jpg'
import facebookIcon from '../../../aesthetic/images/icons/facebook.svg'
import linkedinIcon from '../../../aesthetic/images/icons/linkedin.svg'
import twitterIcon from '../../../aesthetic/images/icons/twitter.svg'

const StyledSocialMediaPlank = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   width: 100%;
   height: 100%;

   background: rgba(0, 0, 0, 0.1);
`

const StyledImg = styled.img`
   width: 2rem;
   height: 2rem;

   background: transparent;
   color: white;

   margin: 0.5rem;
   border: none;
`

const SocialMediaPlank = () => {
   return (
      <StyledSocialMediaPlank>
         <StyledImg src = { legalEliteIcon } alt="le"/>
         <StyledImg src = { superLawyersIcon } alt="sl"/>
         <StyledImg src = { preeminentIcon } alt="pre"/>
         <StyledImg src = { facebookIcon } alt="fb"/>
         <StyledImg src = { linkedinIcon } alt="ln"/>
         <StyledImg src = { twitterIcon } alt="tw"/>
      </StyledSocialMediaPlank>
   )
}

export default SocialMediaPlank