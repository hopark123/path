import Modal from 'react-modal';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import notidetail from "../../Data/notidetail.json"
import { ModalComment, CreateComment } from "../../Componets/Comment"
import { NotiPage } from './NotiPage';
import Moment from "react-moment"
import { NotiDetailChat } from "./NotiDetailChat"
async function NotiDetailGet({ myaccessToken }) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken,
			"Reauthorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}
function NotiBody(props) {
	const { notidetail } = props
	const content = notidetail.content
	return (
		<div class="q-box">
			<p>{content}</p>
		</div>
	)
}

function NotiDetailHead(props) {
	const { notidetail } = props
	const [seconds, setSeconds] = useState(Date.now());
	const owner = notidetail.owner
	const createTime = new Date(notidetail.createdAt);
	const nowTime = new Date(seconds);
	let form;
	if (parseInt(createTime - nowTime) > -60000)
		form = "방금 전"
	else if (parseInt(createTime - nowTime) < -86400000)
		form = "M월 D일"
	return (
		<>
			<div className="hgroup">
				<div className="profile">
					<span className="photo">
						<img src="images/@photo.png" alt="" />
					</span>
					<div className="info">
						<em>{owner.name}</em>
						<span><Moment format={form}>{createTime}</Moment></span>
					</div>
				</div>
				<div className="add-w">
					<button type="button"><span>추가작업</span></button>
					<div>
						<ul>
							<li><a href="#">수정</a></li>
							<li><a href="#">삭제</a></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
export function NotiDetail(props) {
	const navigate = useNavigate();
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = NotiDetailGet({myaccessToken})
	const attachments = notidetail.attachments
	const title = notidetail.content
	const [comments, setComment] = useState({ newComment: "", });
	const modalOpen = (e) => {
		e.preventDefault();
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
			<main id="snContent" className="class-w">
				<NotiPage />
			</main>
			<div className='dimd-layer'>
				<section className="def-layer">
					<div className="tit-w"></div>
					<div className="in-cnts">
						<div className="in-chat">
							<div className="ques-box">
								<NotiDetailHead notidetail={notidetail} />
								<NotiBody notidetail={notidetail}/>
							</div>
							<NotiDetailChat notidetail={notidetail}/>
						</div>
					</div>
					<div className="btn-close">
						<button type="button" onClick={modalOpen}><span>팝업 닫기</span></button>
					</div>
				</section>
			</div>
		</>
	)
}
/*
	<Modal isOpen={open} ariaHideApp={false} name="modal">
		<input type="button" value="X" onClick={modalOpen} name="x" /><br />
		선생님 이름<br />
		==================<br />
		공지사항 입니다~~~!!<br />
		{attachments.map((item) => {
			if (item && item.attachType == "image")
				return (<Images images={item} key={item.id} />)
		})
		}
		{attachments.map((item) => {
			if (item && item.attachType != "image")
				return (<AttachFile file={item} key={item.id} />)
		})
		}
		<ModalComment />
		<CreateComment />
	</Modal>
*/