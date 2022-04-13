import { CommentList, CreateComment } from "../../Componets/Comment"

export function QnaDetailChat(props) {
	const { qnaDtail } = props
	// console.log(qnaDtail)
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
					</div>
				</div>
				<CreateComment/>
			</div>
		</>
	)
}