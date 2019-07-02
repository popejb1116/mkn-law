import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.div`
   grid-area: h;

   display: flex;
   justify-content: center;
   align-items: center;

   background: ${ props => props.theme.primary };   
   border-bottom: solid 5px ${ props => props.theme.secondary };   
`

const Header = () => {
   return (
      <StyledHeader>
         <Logo />
      </StyledHeader>
   )
}

export default Header