import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import taskDetail from "../../Data/taskDetail.json"

function Head() {
	return (
		<>
			<div className="tit-w">
				<div className="cate">
					<span className="c-li">LIVE</span>
					<span className="c-na">미달성</span>
				</div>
			</div>
		</>
	)
}
function BodyCerti() {
	return (
		<>
			<div className="cando">
				<div className="photo-up">
					<button type="button">인증하기</button>
				</div>
				<div className="cando-list">
					<div className="viewport">
						<ul>
							<li><a href="#"><img src="images/@photo.png" alt="" /></a></li>
							<li><a href="#"><img src="images/@photo.png" alt="" /></a></li>
							<li><a href="#"><img src="images/@photo.png" alt="" /></a></li>
							<li><a href="#"><img src="images/@photo.png" alt="" /></a></li>
						</ul>
					</div>
					<button type="button" className="prev"><span>이전 인증</span></button>
					<button type="button" className="next"><span>다음 인증</span></button>
				</div>
			</div>
		</>
	)
}
function SideStudent() {
	return (
		<>
			<div className="mem-box">
				<ul>
					<li>
						<i>열공이</i>
						<div>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
						</div>
					</li>
					<li>
						<i>안열공이</i>
						<div>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<span><img src="images/@photo.png" alt="" /></span>
							<em>+20</em>
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}
function SideComment() {
	return (
		<>
			<div className="chat-w">
				<div className="chat-li">
					<div className="date"><span>2월 28일</span></div>
					<div className="msg">
						<span className="photo">
							<img src="images/@photo.png" alt="" />
						</span>
						<em className="pf">윤이나<span>3월 1일</span></em>
						<div className="txt-w">
							<p>선생님 오늘 강의 듣고 궁금한게 있습니다. 9페이지 3번 관련해서 질문 남겼어요!</p>
							<p>확인 부탁드려요.</p>
						</div>
					</div>
					<div className="msg send">
						<em className="pf">송예나<span>10분전</span></em>
						<div className="txt-w">
							<p>저도 정말 궁금한 문제였어요. 선생님</p>
							<p>저도 정말 궁금한 문제였어요.</p>
						</div>
					</div>
					<div className="date"><span>2월 28일</span></div>
					<div className="msg">
						<span className="photo">
							<img src="images/@photo.png" alt="" />
						</span>
						<em className="pf">윤이나<span>3월 1일</span></em>
						<div className="txt-w">
							<p>선생님 오늘 강의 듣고 궁금한게 있습니다. 9페이지 3번 관련해서 질문 남겼어요!</p>
							<p>확인 부탁드려요.</p>
						</div>
					</div>
					<div className="msg send">
						<em className="pf">송예나<span>10분전</span></em>
						<div className="txt-w">
							<p>저도 정말 궁금한 문제였어요.저도 정말 궁금한 문제였어요.저도 정말 궁금한 문제였어요.저도 정말 궁금한 문제였어요.저도 정말 궁금한 문제였어요.저도 정말 궁금한 문제였어요.</p>
						</div>
						<div className="img-w">
							<img src="images/@photo.png" alt="" />
						</div>
					</div>
				</div>
				<fieldset className="cmt-input">
					<legend>댓글 쓰기</legend>
					<div className="photo-up-cmt">
						<input type="file" id="photoUp" /><label htmlFor="photoUp"><span>사진 첨부</span></label>
					</div>
					<textarea title="댓글 입력"></textarea>
					<button type="submit"><span>게시</span></button>
				</fieldset>
			</div>
		</>
	)
}
function BodyBody() {
	return (
		<>
			<div className="view-w htype2">
				<div className="hgroup">
					<h1>[오전] 백지복습 인증하기</h1>
					<div className="qr-w">
						<div className="qr"><img src="images/@qr.png" alt="" /></div>
						<p>모바일에서 바로 업로드하실 건가요?</p>
					</div>
				</div>
				<div className="view-cnts">
					본 수업이 시작되기 전 오전시간 동안<br />
					전날 강의에 대한 내용을 백지복습한 뒤, 사진을 올려 인증해주세요.<br /><br />
					—————————————————————————<br />
					😆👍 이렇게 인증해주세요 😆👍<br />
					백지복습한 종이를 촬영한 뒤, 아래 버튼을 눌러 업로드해주세요.<br />
					사진 속에 손과 종이가 모두 나와야 인정됩니다.<br /><br />
					😢👎 이렇게 인증하면 안 돼요 😢👎<br />
					본 수업이 시작되기 전 오전시간 동안<br />
					전날 강의에 대한 내용을 백지복습한 뒤, 사진을 올려 인증해주세요.<br /><br />
					—————————————————————————<br />
					😆👍 이렇게 인증해주세요 😆👍<br />
					백지복습한 종이를 촬영한 뒤, 아래 버튼을 눌러 업로드해주세요.<br />
					사진 속에 손과 종이가 모두 나와야 인정됩니다.<br /><br />
					😢👎 이렇게 인증하면 안 돼요 😢👎<br />
					본 수업이 시작되기 전 오전시간 동안<br />
					전날 강의에 대한 내용을 백지복습한 뒤, 사진을 올려 인증해주세요.<br /><br />
					—————————————————————————<br />
					😆👍 이렇게 인증해주세요 😆👍<br />
					백지복습한 종이를 촬영한 뒤, 아래 버튼을 눌러 업로드해주세요.<br />
					사진 속에 손과 종이가 모두 나와야 인정됩니다.<br /><br />
					😢👎 이렇게 인증하면 안 돼요 😢👎<br />
				</div>
			</div>
		</>
	)
}
function Body() {
	return (
		<>
			<div className="in-cnts">
				<div className="in-chat">
					<div className="cando-w">
						<BodyBody />
						<BodyCerti />
					</div>
					<div className="chat-mw">
						<SideStudent />
						<SideComment />
					</div>
				</div>
			</div>
		</>
	)
}
export function TodoDetail() {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();
	const params = useParams();
	console.log(params)

	return (
		<>
			<div className="dimd-layer">
				<section className="def-layer">
					<Head />
					<Body />
					<div className="btn-close">
						<button type="button"><span>팝업 닫기</span></button>
					</div>
				</section>
			</div>
		</>
	)
}