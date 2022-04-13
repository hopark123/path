import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import qnaDetail from "../../Data/qnaDetail.json"
import { AttachImag, Attachment } from "../../Componets/Attachment"
import { QnaPage } from './Qna';
import { QnaDetailChat } from './QnaDetailChat';
import Moment from "react-moment"


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


function QnaDetailBody(props) {
	const { qnaDetail } = props
	const content = qnaDetail.content
	return (
		<>
			<div className="q-box">
				<p>{content}</p>
				<div className="q-img">
					<img src="images/@q.png" alt="" />
				</div>
			</div>
			<div className="file-down">
				<p>PATH_회사소개.pdf</p>
				<a href="#">234KB<span>다운로드</span></a>
			</div>
		</>
	)
}

function QnaDetailHead(props) {
	const { qnaDetail } = props
	const owner = qnaDetail.owner
	const [seconds, setSeconds] = useState(Date.now());
	const createTime = new Date(qnaDetail.createdAt);
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


export function QnaOneDetail(props) {
	const navigate = useNavigate();
	const modalOpen = (e) => {
		e.preventDefault();
		navigate("/home/qna");
	}
	// console.log(localStorage)
	console.log(qnaDetail)
	const comment = qnaDetail.content
	const attachments = qnaDetail.attachments
	return (
		<>
			<main id="snContent" className="className-w">
				<QnaPage />
			</main>
			<div className="dimd-layer">
				<section className="def-layer">
					<div className="tit-w"></div>
					<div className="in-cnts">
						<div className="in-chat">
							<div className="ques-box">
								<QnaDetailHead qnaDetail={qnaDetail} />
								<QnaDetailBody qnaDetail={qnaDetail} />
							</div>
							<QnaDetailChat qnaDetail={qnaDetail} />
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
	<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
	{params.id} <br/>
	{comment} <br/>
	<AttachImag attachments={attachments}/>
	<Attachment attachments={attachments}/>
</Modal>
*/