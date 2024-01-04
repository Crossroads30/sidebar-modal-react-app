import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
	// const data = useContext(AppContext)
	// console.log(data)

	const { setShowSidebar, setShowModal } = useGlobalContext()

	return (
		<main>
			<button onClick={() => setShowSidebar(true)} className='sidebar-toggle'>
				<FaBars />
			</button>
			<button onClick={() => setShowModal(true)} className='btn' type='button'>
				show modal
			</button>
		</main>
	)
}

export default Home
