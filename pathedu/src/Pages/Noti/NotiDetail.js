import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import notidetail from "../../Data/notidetail.json"
import { ModalComment, CreateComment} from "../../Componets/Comment"

async function NotiDetailGet({myaccessToken}) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken, 
		"Reauthorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

function Images(images) {
	return(
		<>
		{images.images.filename} : <img src={`/images/${images.images.filename}`} width="44" height="44"/><br/>
		</>
	)
}

function AttachFile(file) {
	// console.log(file.file)
	return(
		<>
		{file.file.filename} <br/>
		============================<br/>
		</>
	)
}


export function NotiDetail(props) {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();
	const myaccessToken = localStorage.getItem("accessToken");
	const response = NotiDetailGet({myaccessToken})
	const attachments = notidetail.attachments
	const title = notidetail.content
	const [comments, setComment] = useState({newComment:"",});
	// console.log(notidetail.attachments)
	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/noti");
	}
	
	const onChangeComment = (e) => {
		setComment({
			...comments,
			[e.target.name]: e.target.value,
		});
	}
	const onComment = (e) => {
		e.preventDefault();
		console.log(comments)
	}
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
			선생님 이름<br/>
			==================<br/>
			공지사항 입니다~~~!!<br/>
			{attachments.map((item) => {
				if (item && item.attachType == "image")
					return (<Images images={item.fileinfo} key={item.id}/>)
			})
			}
			{attachments.map((item) => {
				if (item && item.attachType != "image")
					return (<AttachFile file={item.fileinfo} key={item.id}/>)
			})
			}
			<ModalComment/>
			<CreateComment/>
		</Modal>
		</>
	)
}