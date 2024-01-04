import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { setShowSidebar } = useGlobalContext()

  return (
		<div className='sidebar-toggle'>
			<button onClick={() => setShowSidebar(true)} className='sidebar-toggle'>
				<FaBars />
			</button>
		</div>
	)
}

export default Home
