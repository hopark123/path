import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import qnaDetail from "../../Data/qnaDetail.json"
import { AttachImag, Attachment } from "../../Componets/Attachment"
import { QnaPage } from './Qna';

async function getQnaDetail({ classId, feedId }) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Country': 'KR',
			'Authorization': 'Bearer xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx',
			'Reauthorization': 'Bearer xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx'
		}
	})
		.then(data => data.json())
}


export function QnaOneDetail(props) {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();
	const params = useParams();
	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/qna");
	}
	// console.log(localStorage)
	console.log(qnaDetail)
	const comment = qnaDetail.content
	const attachments = qnaDetail.attachments
	return (
		<>
			<main id="snContent" className="class-w">
				<QnaPage />
			</main>
		</>
	)
}
/*
<Modal isOpen={open} ariaHideApp={false} name="modal">
	<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
	{params.id} <br/>
	{comment} <br/>
	<AttachImag attachments={attachments}/>
	<Attachment attachments={attachments}/>
</Modal>
*/