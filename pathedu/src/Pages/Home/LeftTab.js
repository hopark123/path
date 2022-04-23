import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { MyPage } from '../MyPage/MyPage';
import { Calendar } from '../../Componets/Calendar';
export function LeftTab() {
	const [openProfile, setOpenProfile] = useState(false);
	const today = new Date()
	const navigate = useNavigate();

	const onPath = (e) => {
		e.preventDefault()
		navigate(`/home/day/${today}`,
			{
				state: {
					year: today.getFullYear(),
					month: today.getMonth(),
					date: today.getDate(),
					day: today.getDay(),
				}
			})
	}

	return (
		<>
			<div className="def-side">
				<h1>
					<Link to={`/home/day/${today}`}
						state={{
							year: today.getFullYear(),
							month: today.getMonth(),
							date: today.getDate(),
							day: today.getDay()
						}}>
						<span>
							PATH
						</span>
					</Link>
				</h1>
				<div className="t-info">
					<div className="photo">
						<img src="images/@photo.png" alt="" />
					</div>
					<em>이종현 선생님 고테마(고득점 약점보완 테마) 수학</em>
				</div>
				<div className="viewport">
					<Calendar />
					<nav>
						<form name="leftPage">
							<ul>
								<li><Link to="noti" className="m1">
									공지
								</Link>
								</li>
								<li>
									<Link to="course" className="m3">
										강좌
									</Link>
								</li>
								<li>
									<Link to="qna" className="m2">
										질문
									</Link>
								</li>
							</ul>
						</form>
					</nav>
				</div>
				<div className="profile-w">
					<div className="photo">
						<img src="images/@photo.png" alt="" />
					</div>
					<div className="info">
						<em>송예나</em>
						<span>yesme@path.how</span>
					</div>
					<Link to="" className="sett" name="profile" value="사용자정보" onClick={() => { setOpenProfile(true) }}>
						<span>
							설정
						</span>
					</Link>
					<MyPage openProfile={openProfile} setOpenProfile={setOpenProfile} />
					<a href="#" className="sett"><span>설정</span></a>
				</div>
			</div>
		</>
	)
}
