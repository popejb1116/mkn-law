import React from 'react'
//LAYOUT
import Header from './header/Header'
import TopAside from './asides/top/TopAside'
import RightAside from './asides/right/RightAside'
import BottomAside from './asides/bottom/BottomAside'
import LeftAside from './asides/left/LeftAside'
import DesktopNavbar from './navigation/DesktopNavbar'
import Footer from './footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import { PlaceholderProvider } from '../../contexts/PlaceholderContext'
//CONTENT
import Home from './content/Home'
import Litigation from './content/Litigation'
import Contracts from './content/Contracts'
import HRConsulting from './content/HRConsulting'
import Research from './content/Research'
import AttorneyProfile from './content/AttorneyProfile'
import ContactUs from './content/ContactUs'
import BusinessForm from './content/BusinessForm'
import EmployeeForm from './content/EmployeeForm'

import MobileNavbar from './navigation/MobileNavbar'

import styled from 'styled-components'

const StyledGridLayout = styled.div`
   display: grid;
   height: 100vh;

   position: relative;
   overflow-x: hidden;

   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 15vh 8vh auto 20vh;
   grid-template-areas: 
      " h h h h h h h h h h h h "
      " n n n n n n n n n n n n "
      " . la la c c c c c c ra . . "
      " f f f f f f f f f f f f "
   ;
   #styled-top-aside, #styled-bottom-aside {
      display: none;
   }

   /* TODO: UPDATE ASIDE */
   @media only screen and (max-width: 1000px) {
      grid-template-rows: 12vh 12vh auto 20vh;
      grid-template-areas: 
      " h h h h h h h h h h h h "
      " ta ta ta ta ta ta ta ta ta ta ta ta "
      " c c c c c c c c c c c c "
      " f f f f f f f f f f f f "
   ;

      #styled-DesktopNavbar {
         display: none;
      }
      #styled-top-aside {
         display: flex;
      }
      #styled-left-aside, #styled-right-aside {
         display: none;
      }
   }

   @media only screen and (max-width: 768px) {
      grid-template-rows: 12vh 12vh auto 10vh 20vh;
      grid-template-areas: 
      " h h h h h h h h h h h h "
      " ta ta ta ta ta ta ta ta ta ta ta ta "
      " c c c c c c c c c c c c "
      " ba ba ba ba ba ba ba ba ba ba ba ba "
      " f f f f f f f f f f f f "
   ;
      #styled-bottom-aside {
         display: flex;
      }
   }
`

const GridLayout = () => {
   return (
      <StyledGridLayout>
         <Header />
         <TopAside />
         <RightAside />
         <BottomAside />
         <LeftAside />
         
         <BrowserRouter>
            <DesktopNavbar />
            <MobileNavbar />
            {/* PROVIDES CONTROL OF CARD IMAGE PLACEHOLDER OPACITIES */}
            <PlaceholderProvider>                  
               <Route exact path="/" component = { Home } />
               <Route path="/litigation" component = { Litigation } />
               <Route path="/contracts" component = { Contracts } />
               <Route path="/hr-consulting" component = { HRConsulting } />
               <Route path="/research" component = { Research } />
               <Route path="/attorney-profile" component = { AttorneyProfile } />
               <Route exact path="/contact-us" component = { ContactUs } />
               <Route exact path="/contact-us/business" component = { BusinessForm } />
               <Route exact path="/contact-us/employee" component = { EmployeeForm } />
            </PlaceholderProvider>
         </BrowserRouter>

         <Footer />
      </StyledGridLayout>
   )
}

export default GridLayout