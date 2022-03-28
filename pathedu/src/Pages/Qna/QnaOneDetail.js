import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export function QnaOneDetail(props) {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/course");
	}
	console.log(localStorage)
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
		</Modal>
		</>
	)
}