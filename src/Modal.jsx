import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
	const { isModalOpen, closeModal } = useGlobalContext()
	return (
		<div
			className={!isModalOpen ? 'modal-overlay' : 'modal-overlay show-modal'}
		>
			<div className='modal-container'>
				<h3>modal content</h3>
				<button onClick={closeModal} className='close-modal-btn' type='button'>
					<FaTimes />
				</button>
			</div>
		</div>
	)
}

export default Modal
