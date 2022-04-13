import { CoursePage } from "./Course";
import { useNavigate, Link, useLocation } from 'react-router-dom'

export function CourseDetail() {
	const navigate = useNavigate();

	const modalOpen = (e) => {
		e.preventDefault();
		navigate("/home/course");
	}

	const clickBack = (e) => {
		e.preventDefault();
		navigate(-1);
	}

	return (
		<>
			<CoursePage />
			<div className="dimd-layer">
				<section className="def-layer">
					<div className="tit-w">
						<div className="prev">
							<button type="button" onClick={clickBack}><span>이전</span></button>
						</div>
					</div>
					<div className="in-cnts">
						<div className="view-w">
							<div className="hgroup">
								<h1>그래프와 활용 2강 - 삼차, 사차함수 그래프의 유형 및 중요한 특징</h1>
								<div className="d-info">
									<span className="date"><i>날짜</i>3월 1일</span>
									<span className="time"><i>시간</i>01:33:30</span>
								</div>
							</div>
							<div className="view-cnts">
								<div className="video-w">
									<div className="video-c">
										<iframe width="100%" height="100%" src="images/path_bg.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="강좌명을 타이틀로 넣어주세요"></iframe>
									</div>
								</div>
							</div>
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