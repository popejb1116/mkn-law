import React, { useState } from 'react'

const DisplayMobileNavContext = React.createContext()

const DisplayMobileNavProvider = props => {
   
   const [displayMobileNavbar, toggleMobileNavbar] = useState(false)
   
   return (
      <DisplayMobileNavContext.Provider value = {{
         displayMobileNavbar: displayMobileNavbar,
         toggleMobileNavbar: toggleMobileNavbar
      }}>
         {props.children}
      </DisplayMobileNavContext.Provider>
   )
}

export { DisplayMobileNavContext, DisplayMobileNavProvider}