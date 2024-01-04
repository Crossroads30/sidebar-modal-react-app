import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { showSidebar, setShowSidebar } =
		useGlobalContext()

	return (
		<aside className={!showSidebar ? 'sidebar' : 'sidebar show-sidebar'}>
			<div className='sidebar-header'>
				<img className='logo' src={logo} alt='logo' />
				<button onClick={() => setShowSidebar(false)} className='close-btn'>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map(link => {
					const { id, url, text, icon } = link
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					)
				})}
			</ul>
			<ul className='social-icons'>
				{social.map(item => {
					const { id, url, icon } = item
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					)
				})}
			</ul>
		</aside>
	)
}

export default Sidebar
