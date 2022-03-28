import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet} from 'react-router-dom'
import {ProfileModal} from '../Profile/ProfileModal';
import Calendar from 'react-calendar';

export function LeftTab() {
	const [openProfile, setOpenProfile] = useState(false);
	
	return (
		<>
		{/* <Calendar /> */}
		<h1>PATH</h1>
		<form name="leftPage">
			<Link to="noti">
				<input type="button" name="공지" value="공지" /><br/>
			</Link>
			<Link to="course">
				<input type="button" name="강좌" value="강좌" /><br/>
			</Link>
			<Link to="qna">
				<input type="button" name="질문" value="질문" /><br/>
			</Link>
			<input type="button" name="profile" value="사용자정보" onClick = {() =>{setOpenProfile(true)}}/><br/>
			<ProfileModal openProfile={openProfile} setOpenProfile={setOpenProfile}/>
		</form>
		</>
	)
}
