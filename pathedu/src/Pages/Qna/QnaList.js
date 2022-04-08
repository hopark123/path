import { Link, Outlet } from "react-router-dom"
import qnalist from "../../Data/qnalist.json"
import { useState } from 'react';
import { CommentList, CreateComment } from "../../Componets/Comment"
import { AttachImag } from "../../Componets/Attachment"


async function getQna({ myaccessToken }) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}

function AttachmentCnt(attachments) {
	let imageCnt = 0;
	if (attachments) {
		attachments.map(item => {
			if (item.type == "image")
				imageCnt++;
			})
	}
	return (imageCnt)
}

function QnaListBody(props) {
	const { qna } = props
	const content = qna.content
	const qnaId = qna.id
	const attachmentCnt = AttachmentCnt(qna.attachments)
	// const ImagSrc = qna.attachment[0].thumbnails[0].url

	return (
		<>
			<div className="q-box">
				<p>{content}</p>
				<div className="more">
					<Link to={{
						pathname: `${qnaId}`,
						state: {
							qnaId: `${qnaId}`
						}
					}}>
						더보기
						<br />
					</Link>
				</div>
				<div className="q-img">
					<AttachImag attachments={qna.attachments}/>
					{/* <img src={ImagSrc} alt="" /> */}
					<button type="button">{attachmentCnt}</button>
				</div>
			</div>
		</>
	)
}

function QnaListHead(props) {
	const { qna } = props
	const owner = qna.owner
	const ownerName = owner.name
	const onwerImg = owner.profileImg.url
	return (
		<>
			<span className="new">NEW!</span>
			<div className="hgroup">
				<span className="photo">
					<img src={onwerImg} alt="" />
				</span>
				<div className="info">
					<em>{ownerName} <i className="n-open"><span>비공개</span></i></em>
					<span>3월 1일</span>
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


export function QnaListOne(props) {
	// console.log(props)
	const qna = props.qna
	const qnaId = qna.id
	const attachments = qna.attachments
	const [comments, setComment] = useState({ newComment: "", });
	const onChangeComment = (e) => {
		setComment({
			...comments,
			[e.target.name]: e.target.value,
		});
	}
	const onComment = (e) => {
		e.preventDefault();
		console.log(comments);
	}
	return (
		<>
			<div className="cnts-box">
				<QnaListHead qna={qna} />
				<QnaListBody qna={qna} />
				<CommentList />
			</div>
		</>
	)
}

export const QnaList = async () => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getQna({ myaccessToken })
	// console.log(qnalist)
	return (
		<>
			{qnalist.map((item) => {
				return (<QnaListOne qna={item} key={item.id} />)
			})}
		</>
	)
}
