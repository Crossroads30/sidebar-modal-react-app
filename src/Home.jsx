import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
		<div className='sidebar-toggle'>
			<button className='sidebar-toggle'>
				<FaBars />
			</button>
		</div>
	)
}

export default Home
