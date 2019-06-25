import React from 'react'
import styled from 'styled-components'
import facebookIcon from '../../../../aesthetic/images/icons/facebook.svg'
import linkedinIcon from '../../../../aesthetic/images/icons/linkedin.svg'
import twitterIcon from '../../../../aesthetic/images/icons/twitter.svg'

const StyledSocialMedia = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   width: 90%;
`

const StyledImg = styled.img`

   width: 2.5rem;
   height: 2.5rem;

   background: transparent;

   margin: 0.5rem;
   border: none;
`

const SocialMedia = () => {
   return (      
         <StyledSocialMedia>
            <a href="https://facebook.com">
            <StyledImg src = { facebookIcon } alt="fb"/>
            </a>
            <a href="https://linkedin.com">
            <StyledImg src = { linkedinIcon } alt="ln"/>
            </a>
            <a href="https://twitter.com">
            <StyledImg src = { twitterIcon } alt="tw"/>
            </a>
         </StyledSocialMedia>      
   )
}

export default SocialMedia