import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext()

//custom hook
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

  return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isModalOpen,
				openModal,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
export { AppContext, AppProvider }
