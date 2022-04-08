import { Link } from "react-router-dom"
import { useState } from 'react';
import { CommentList, CreateComment } from "../../Componets/Comment"
import { Attachment, AttachImag } from "../../Componets/Attachment"

function NotiListOneBody(props) {
	const { noti } = props
	const content = noti.content
	const notiId = noti.id
	return (
		<div className="q-box">
			<p>{content}</p>
			<div className="more">
				<Link to={{
					pathname: `${notiId}`,
					state: {
						notiId: `${notiId}`
					}
				}}>
					더보기
					<br />
				</Link>
			</div>
		</div>
	)

}

function NotiListOneHead(props) {
	const { noti } = props;
	const owner = noti.owner
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

export function NotiListOne(props) {
	const { noti } = props;
	const head = noti.content
	const [comments, setComment] = useState({ newComment: "", });
	const notiId = noti.id
	const teacher = noti.owner.name
	const attachment = noti.attachments
	return (
		<>
			<div className="cnts-box">
				<NotiListOneHead noti={noti} />
				<NotiListOneBody noti={noti} />
				<CommentList />
			</div>
		</>
	)
}