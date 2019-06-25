import React from 'react'
import Header from './header/Header'
import Aside from './aside/Aside'
import Navbar from './navigation/Navbar'
import Footer from './footer/Footer'
import styled from 'styled-components'

import { BrowserRouter, Route } from 'react-router-dom'
import { PlaceholderProvider } from '../../contexts/PlaceholderContext'
import Home from './content/Home'
import Litigation from './content/Litigation'
import Contracts from './content/Contracts'
import HRConsulting from './content/HRConsulting'
import Research from './content/Research'
import AttorneyProfile from './content/AttorneyProfile'
import ContactUs from './content/ContactUs'
import BusinessForm from './content/BusinessForm'
import EmployeeForm from './content/EmployeeForm'

const StyledGridLayout = styled.div`
   display: grid;
   height: 100vh;
   /* grid-gap: 1px; */
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 15vh 8vh auto 20vh;
   grid-template-areas: 
      " h h h h h h h h h h h h "
      " n n n n n n n n n n n n "
      " . a a c c c c c c . . . "
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

const GridLayout = () => {
   return (
      <StyledGridLayout>
         <Header />
         <Aside />
         
         {/* CONTENT COMPS */}
         <BrowserRouter>
            

            <Navbar />
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