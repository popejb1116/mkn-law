import React from 'react'
//LAYOUT
import Header from './header/Header'
import LeftAside from './asides/left/LeftAside'
import RightAside from './asides/right/RightAside'
import Navbar from './navigation/Navbar'
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

import styled from 'styled-components'

const StyledGridLayout = styled.div`
   display: grid;
   height: 100vh;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 15vh 8vh auto 20vh;
   grid-template-areas: 
      " h h h h h h h h h h h h "
      " n n n n n n n n n n n n "
      " . la la c c c c c c ra . . "
      " f f f f f f f f f f f f "
   ;

   /* TODO: UPDATE ASIDE */
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

const GridLayout = () => {
   return (
      <StyledGridLayout>
         <Header />
         <LeftAside />
         <RightAside />
         
         <BrowserRouter>
            <Navbar />
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