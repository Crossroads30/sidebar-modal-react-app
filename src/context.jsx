import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext()

//custom hook
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
	const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)
  return (
		<AppContext.Provider
			value={{ showSidebar, setShowSidebar, showModal, setShowModal }}
		>
			{children}
		</AppContext.Provider>
	)
}
export { AppContext, AppProvider }
