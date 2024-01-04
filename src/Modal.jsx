import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const { showModal, setShowModal } = useGlobalContext()
	return (
		<>
			<button onClick={() => setShowModal(true)} className='btn' type='button'>
				show modal
			</button>
			<div
				className={!showModal ? 'modal-overlay' : 'modal-overlay show-modal'}
			>
				<div className='modal-container'>
					<button
						onClick={() => setShowModal(false)}
						className='close-modal-btn'
						type='button'
					>
						<FaTimes />
					</button>
					<h3>modal content</h3>
				</div>
			</div>
		</>
	)
}

export default Modal
