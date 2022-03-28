import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export function TodoDetail () {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/day");
	}
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
		</Modal>
		</>
	)
}