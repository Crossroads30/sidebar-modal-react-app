import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
	const { showModal, setShowModal } = useGlobalContext()
	return (
		<div className={!showModal ? 'modal-overlay' : 'modal-overlay show-modal'}>
			<div className='modal-container'>
				<h3>modal content</h3>
				<button
					onClick={() => setShowModal(false)}
					className='close-modal-btn'
					type='button'
				>
					<FaTimes />
				</button>
			</div>
		</div>
	)
}

export default Modal
