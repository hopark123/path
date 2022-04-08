import { Link } from 'react-router-dom'

export function LayoutLoginHead(props){
	return (
		<>
			<div id="skipNav">
				<a href="#snContent">본문바로가기</a>
			</div>
			<hr />
			<video autoPlay muted loop className="bg-video">
				<source src="images/path_bg.mp4" type="video/mp4" />
			</video>
		</>
	);
}
/*
TODO Link
*/
export function LayoutLoginFooter(props){
	return (
		<>
			<footer>
				<nav>
					<ul>
						<li>
							<Link to="/Login">
								회사소개
							</Link>
						</li>
						<li>
							<Link to="/Login">
								이용약관
							</Link>
						</li>
						<li>
							<Link to="/Login">
								개인정보방침
							</Link>
						</li>
						<li>
							<Link to="/Login">
								고객센터
							</Link>
						</li>
					</ul>
				</nav>
				<div className="info">
					<div>
						<span>주식회사 패쓰(PATH)</span>
						<span>대표 신승학</span>
					</div>
					<div>
						<span>사업자등록번호 798-87-02289</span>
						<span>고객센터 02-566-8982</span>
					</div>
				</div>
				<address>서울특별시 강남구 선릉로 305 한티KR타워 8층</address>
				<p>Copyright © 2022 PATH inc, ltd. All rights reserved.</p>
			</footer>
		</>
	);
}