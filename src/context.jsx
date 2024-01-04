import React, { useState, useContext, createContext } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)
  return (
		<GlobalContext.Provider
			value={{ showSidebar, setShowSidebar, showModal, setShowModal }}
		>
			{children}
		</GlobalContext.Provider>
	)
}
export default AppContext
