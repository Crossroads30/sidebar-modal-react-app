import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
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
