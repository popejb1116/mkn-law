import React from 'react'
import Header from './header/Header'
import Aside from './aside/Aside'
import Content from './content/Content'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

const StyledLayout = styled.div`
   display: grid;
   height: 100vh;
   /* grid-gap: 1px; */
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 15vh 5vh auto 20vh;
   grid-template-areas: 
      " h h h h h h h h h h h h "
      " n n n n n n n n n n n n "
      " a a c c c c c c c c c c "
      " f f f f f f f f f f f f "
   ;

   @media only screen and (max-width: 768px) {
      grid-template-areas: 
      " h h h h h h h h h h h h "
      " a a a a a a a a a a a a "
      " c c c c c c c c c c c c "
      " f f f f f f f f f f f f "
      ;

      #styled-navbar {
         display: none;
      }
   }
`

const Layout = () => {
   return (
      <StyledLayout>
         <Header />
         <Aside />
         <Content />

         <BrowserRouter>
            <Navbar />
         </BrowserRouter>

         <Footer />
      </StyledLayout>
   )
}

export default Layout