import { Outlet } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import qnaWrite from "../../Data/qnaWrite.json"
import { QnaPage } from './Qna';

function QnaWirteBody(props) {
	return (
		<>
			{/* <textarea value={props} title="질문 입력">선생님 교제 P.73에 10번 문제 계속 저는</textarea> */}
			<div className="photo-li">
				<div>
					<span className="photo">
						<img src="images/@photo.png" alt="" />
					</span>
					<button type="button" className="btn-del"><span>첨부사진 삭제</span></button>
				</div>
				<div>
					<span className="photo">
						<img src="images/@photo.png" alt="" />
					</span>
					<button type="button" className="btn-del"><span>첨부사진 삭제</span></button>
				</div>
			</div>
			<div className="file-li">
				<div>
					<p>PATH_회사소개.pdf<span>234KB</span></p>
					<button type="button" className="btn-del"><span>첨부파일 삭제</span></button>
				</div>
			</div>
		</>

	)
}
function QnaWritehtmlFooter(props) {
	const navigate = useNavigate();
	const qnaCancel = (e) => {
		e.preventDefault();
		navigate("/home/qna")
	}
	return (
		<>
			<div className="input-ctrl">
				<p><input type="checkbox" id="open" className="toggle" /><label htmlFor="open">선생님에게만 보이기</label></p>
				<div className="btn">
					<button type="button" onClick={qnaCancel}>취소</button>
					<button type="button" className="actv">등록</button>
				</div>
				<span className="num">24/5000</span>
			</div>
		</>
	)
}
function QnaWriteHeader(props) {
	return (
		<>
			<div className="hgroup">
				<div className="profile">
					<span className="photo">
						<img src="images/@photo.png" alt="" />
					</span>
					<em>송예나</em>
				</div>
				<div className="up-box">
					<span className="file"><input type="file" id="fileUp" /><label htmlFor="fileUp"><span>파일첨부</span></label></span>
					<span className="photo"><input type="file" id="photoUp" /><label htmlFor="photoUp"><span>파일첨부</span></label></span>
				</div>
			</div>
		</>
	)
}

export function QnaWrite(props) {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();
	console.log(qnaWrite)
	const modalOpen = (e) => {
		e.preventDefault();
		navigate("/home/qna")
	}
	console.log("here")
	return (
		<>
			<main id="snContent" className="className-w">
				<QnaPage />
			</main>
			<div className="dimd-layer">
				<section className="def-layer">
					<div className="tit-w">
						<h1>질문하기</h1>
					</div>
					<div className="in-cnts">
						<div className="ques-box scroll">
							<QnaWriteHeader />
							<QnaWirteBody />
						</div>
						<QnaWritehtmlFooter />
					</div>
					<div className="btn-close">
						<button type="button" onClick={modalOpen}><span>팝업 닫기</span></button>
					</div>
				</section>
			</div>
		</>
	)
}