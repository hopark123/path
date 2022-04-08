import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet } from 'react-router-dom'
import { ProfileModal } from '../Profile/ProfileModal';
import { Calendar } from '../../Componets/Calendar';
export function LeftTab() {
	const [openProfile, setOpenProfile] = useState(false);

	return (
		<>
			<div className="def-side">
				<h1><a href="#"><span>PATH</span></a></h1>
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
					<Link to=""className="sett" name="profile" value="사용자정보" onClick={() => { setOpenProfile(true) }}>
						<span>
							설정
						</span>
					</Link>
					<ProfileModal openProfile={openProfile} setOpenProfile={setOpenProfile} />
					<a href="#" className="sett"><span>설정</span></a>
				</div>
			</div>
		</>
	)
}
