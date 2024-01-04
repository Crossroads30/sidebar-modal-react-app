import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
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
