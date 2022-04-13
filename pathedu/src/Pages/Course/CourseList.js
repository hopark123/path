import courselist from "../../Data/courselist.json"
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { CoursePage } from "./Course";
import { useAsync } from "react-async"


function CourseListDetailcourse(props) {
	const { lecture } = props
	return (
		<>
			<li>
				<Link to={{
					pathname: `${lecture.id}`
				}}>
					<span className="thumb">
						<img src="images/@photo.png" alt="" />
					</span>
					<div className="info">
						<p>[공통] 2023 이종현 선생님 수학1 - P.12 핵심을 꿰뚫는 EBS 구문, 지문 분석으로 수능&내신 대비 2023 NEW [EBS=고수현!] 고비스 - 수특편<span className="in-new" title="새글">N</span></p>
						<div className="d-info">
							<span className="date"><i>날짜</i>3월 1일</span>
							<span className="time"><i>시간</i>01:33:30</span>
						</div>
					</div>
				</Link>
			</li>
		</>
	)

}


export function CourseListPage() {
	const data = useLocation().state
	const lectures = courselist.lectures
	const navigate = useNavigate();

	const modalOpen = (e) => {
		e.preventDefault();
		navigate("/home/course");
	}
	console.log(lectures)
	return (
		<>
			<CoursePage />
			<div className="dimd-layer">
				<section className="def-layer">
					<div className="tit-w">
						<h1>[공통] 2023 이종현 선생님 수학1 - 총 7개 강의 모음</h1>
					</div>
					<div className="in-cnts">
						<div className="vod-inlist">
							<ul>
								{lectures && lectures.map((item) => {
									return (<CourseListDetailcourse lecture={item} key={item.id} />)
								})}
							</ul>
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
