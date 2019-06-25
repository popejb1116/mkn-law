import React from 'react'
import styled from 'styled-components'
// import legalEliteIcon from '../../../aesthetic/images/icons/legal-elite.png'
// import superLawyersIcon from '../../../aesthetic/images/icons/super-lawyers.png'
// import preeminentIcon from '../../../aesthetic/images/icons/preeminent.jpg'
import facebookIcon from '../../../aesthetic/images/icons/facebook.svg'
import linkedinIcon from '../../../aesthetic/images/icons/linkedin.svg'
import twitterIcon from '../../../aesthetic/images/icons/twitter.svg'

const StyledSocialMedia = styled.div`
   display: flex;   
   justify-content: center;
   width: 90%;
`

const StyledImg = styled.img`

   width: 2.5rem;
   height: 2.5rem;

   background: transparent;
   color: white;

   margin: 0.5rem;
   border: none;
`

const SocialMedia = () => {
   return (
      
         <StyledSocialMedia>
            <StyledImg src = { facebookIcon } alt="fb"/>
            <StyledImg src = { linkedinIcon } alt="ln"/>
            <a href="https://twitter.com">
               <StyledImg src = { twitterIcon } />
            </a>
         </StyledSocialMedia>
      
   )
}

export default SocialMedia