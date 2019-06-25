import React from 'react'
import image from '../../../aesthetic/images/card/attorney-profile_contact-us.jpg'
import placeholder from '../../../aesthetic/images/card-placeholders/attorney-profile_contact-us_placeholder.jpg'
import { PlaceholderContext } from '../../../contexts/PlaceholderContext'
import { ContentLayout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText, InlineLink } from './_StyledComponents'
import { withRouter } from 'react-router-dom'

const ContactUs = props => {

   return (
      <ContentLayout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image} alt="img-error"
                        onLoad={ e => context.handleOpacityChange(e, "ap_cu") }
                     />
                     <PlaceholderImg 
                        src={placeholder} alt="placeholder-error"
                        opacity={context.placeholderOpacities.ap_cu}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>Contact Us</CardTitle>
               
               <InlineLink 
                  onClick={() => props.history.push("/contact-us/business")}
               >CLICK HERE
               </InlineLink>
               <CardText>{text1}</CardText>
               <br/><br/>
               <CardText>{text2}</CardText>
            

            </CardContent>

         </Card>
      </ContentLayout>
   )
}

export default withRouter(ContactUs)


const text1 = " to submit our online business form or call our founding attorney directly at 704.249.2263 to discuss an initial no cost half day on-site human resources analysis and workplace audit."
const text2 = "*Legal Disclaimer and Terms and Conditions of Website Use.  We will make our best efforts to respond to your inquiries, however, please note that due to our current caseload, calendars, and sheer volume of clients seeking representation, some inquiries may not be reached. The submission of information in  no manner guarantees a response in any manner. No attorney-client relationship is formed until an individually signed/written fee agreement and authority to represent is mutually entered into between yourself and the firm. The submission of this basic information via online form; a telephone message to our firm voicemail; or the exchange of information with representatives of our firm as part of the basic information gathering process does not create an attorney client relationship.  Individuals are notified that they should have no expectation of legal advice or an attorney client relationship, or legal services, until a written fee agreement and authority to represent is executed with our firm.  Nothing in this website, firm blog, or any other social media or digital platform constitutes legal advice and should not be taken as such."