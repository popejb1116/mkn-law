import React from 'react'

const DisplayMobileNavContext = React.createContext()

class DisplayMobileNavProvider extends React.Component {

   state = {
      displayMobileNavbar: true
   }

   render() {
      return (
         <DisplayMobileNavContext.Provider value = {{
            displayMobileNavbar: this.state.displayMobileNavbar
         }}>
            {this.props.children}
         </DisplayMobileNavContext.Provider>
      )
   }
}

export { DisplayMobileNavContext, DisplayMobileNavProvider}