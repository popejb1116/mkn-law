import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
   grid-area: f;

   display: flex;
   flex-flow: column wrap;
   justify-content: center;
   align-items: center;

   background: ${ props => props.theme.secondary };   

   border-top: solid 5px whitesmoke;
`

const StyledFooterTitle = styled.div`
   color: whitesmoke;
   padding: 0.25rem;
   font-size: 4vh;
   font-weight: bolder;
   text-align: center;
`

const StyledFooterText = styled.div`
   color: whitesmoke;
   padding: 0.25rem;
   font-size: 2vh;
   font-weight: bold;
   text-align: center;
`

const Footer = () => {
   return (
      <StyledFooter>
         <StyledFooterTitle>Litigation. Contracts. HR Consulting.</StyledFooterTitle>            
         <StyledFooterText>1927 S. TRYON ST. SUITE 106, CHARLOTTE, NC 28203</StyledFooterText>
         <StyledFooterText>OFFICE: 704.280.8529 FAX: 980.939.6389</StyledFooterText>
         <StyledFooterText>INFO@MKNEMPLOYMENTLAW.COM</StyledFooterText>
      </StyledFooter>
   )
}

export default Footer