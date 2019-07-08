import React from 'react'

const DisplayMobileNavContext = React.createContext()

class DisplayMobileNavProvider extends React.Component {

   state = {
      displayMobileNavbar: true
   }

   toggleMobileNavButtonDisplay = () => {
      this.setState( prevState => {
         return { displayMobileNavbar: !prevState.displayMobileNavbar }
      })
   }

   render() {
      return (
         <DisplayMobileNavContext.Provider value = {{
            displayMobileNavbar: this.state.displayMobileNavbar,
            toggleMobileNavButtonDisplay: this.toggleMobileNavButtonDisplay
         }}>
            {this.props.children}
         </DisplayMobileNavContext.Provider>
      )
   }
}

export { DisplayMobileNavContext, DisplayMobileNavProvider}