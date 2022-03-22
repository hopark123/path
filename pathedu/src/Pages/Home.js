import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet} from 'react-router-dom'
import Calendar from 'react-calendar';
import {ProfileModal} from './ProfileModal';
import { useSelector } from 'react-redux';

function LeftPage() {
	const [openProfile, setOpenProfile] = useState(false);

	const onProfile = (e) => {
		e.preventDefault();
		if (e.target.name == 'profile')
			setOpenProfile(true)
		else if (e.target.name == 'x')
			setOpenProfile(false)
		else if (e.target.name == 'cancel') {
			setOpenProfile(false)
			console.log("취소함수")
		}
		else if (e.target.name == '') {
			setOpenProfile(false)
			console.log("저장함수")
		}
	}
	return (
		<>
			{/* <Calendar/> */}
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
				<Link to="noti">
					<input type="button" name="profile" value="사용자정보" onClick={onProfile}/><br/>
				</Link>
				<ProfileModal isOpen={openProfile} clickOpen={onProfile}/>
			</form>
		</>
	)
}

export function ClassDayPage() {
	return (
		<form name="classDay">
			classDay
		</form>
	)
}

export function ClassWeekPage() {
	return (
		<form name="classDay">
			classDay
		</form>
	)
}

export function NotificationPage() {
	return (
		<form name="noti">
			notipage
		</form>
	)
}

export function Home() {
	const [page, setPage] = useState('일')
	const pageChange = (e) => {
		e.preventDefault();
		setPage(e.target.name)
	}
	
	return (
	<>
		<LeftPage pageChange={pageChange}/> <br/>
		-----------<br/>
		<Outlet/><br/>
		-----------<br/>
	</>
	);
}