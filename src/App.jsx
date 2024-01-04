import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { useGlobalContext } from './context'
function App() {
  const { showSidebar, setShowSidebar, showModal, setShowModal } =
		useGlobalContext()
	return (
		<main>
			<Home />
			<section className='section'>
				<Sidebar />
			</section>
			<section className='section'>
				<Modal />
			</section>
		</main>
	)
}

export default App
