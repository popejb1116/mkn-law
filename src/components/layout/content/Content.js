import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
   grid-area: c;
   background: green;   
`

const Content = () => {
   return (
      <StyledContent>
         Content
      </StyledContent>
   )
}

export default Content