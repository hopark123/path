import { useState } from 'react';
import { NavLink, Route} from 'react-router-dom'
import Calendar from 'react-calendar';
import {ProfileModal} from './ProfileModal';
import { useSelector } from 'react-redux';

function LeftPage({pageChange}) {
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
			<Calendar/>
			<h1>PATH</h1>
			<form name="leftPage">
				<input type="button" name="공지" value="공지" onClick={pageChange}/><br/>
				<input type="button" name="강좌" value="강좌" onClick={pageChange}/><br/>
				<input type="button" name="질문" value="질문" onClick={pageChange}/><br/>
				<input type="button" name="profile" value="사용자정보" onClick={onProfile}/><br/>
				<ProfileModal isOpen={openProfile} clickOpen={onProfile}/>
			</form>
		</>
	)
}


function ClassDayPage() {
	return (
		<form name="classDay">
			classDay
		</form>
	)
}
function ClassWeekPage() {
	return (
		<form name="classWeek">
			classWeek
		</form>
	)
}
function NotificationPage() {
	return (
		<form name="noti">
			notipage
		</form>
	)
}

function VodPage() {
	return (
		<form name="Vod">
			Vodpage
		</form>
	)
}

function QnaPage() {
	return (
		<form name="Qna">
			QnaPage
		</form>
	)
}

export function Home() {
	const [page, setPage] = useState('일')

	const {data} = useSelector(state => ({ data:state.FormReducer.form}));

	const pageChange = (e) => {
		console.log({data})

		e.preventDefault();
		setPage(e.target.name)
	}

	return (
	<>
		<LeftPage pageChange={pageChange}/> <br/>
		{page === '일' && (<ClassDayPage/>)}
		{page === '주' && (<ClassWeekPage/>)}
		{page === '공지' && (<NotificationPage/>)}
		{page === '강좌' && (<VodPage/>)}
		{page === '질문' && (<QnaPage/>)}
	</>
	);
}