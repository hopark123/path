import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from '../../Redux/FormReducer';
import { LayoutLoginFooter, LayoutLoginHead } from "../Login/LayoutLogin"
import { Registuser1 } from "./Regist1"
import { Registuser2 } from "./Regist2"


export function RegistPages() {
	const [page, setPage] = useState('start')
	const [profile, setProfile] = useState({
		eMail: "",
		password: "",
		confirmPassword: "",
		name: "",
		phone: "",
		parentPhone: "",
		nowSchool: "",
		year: "",
		weak: "",
		schoolGrade: "",
		satGrade: "",
		destSchool: ""
	});
	console.log(profile)
	const dispatch = useDispatch();
	const makeProfile = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({
			...profile,
			[name]: value
		});
	}
	return (
		<div className="wrapper bg-join">
			<div id="skipNav">
				<a href="#snContent">본문바로가기</a>
			</div>
			<hr />
			<video autoPlay muted loop className="bg-video">
				<source src="images/path_bg.mp4" type="video/mp4" />
			</video>
			<main id="snContent">
				{page === 'start' && (<Registuser1 profile={profile} makeProfile={makeProfile} setPage={setPage} />)}
				{page === 'end' && (<Registuser2 profile={profile} makeProfile={makeProfile} setProfile={setProfile} pageChange={() => { setPage('start') }} />)}
				<br /><LayoutLoginFooter /><br />
			</main>
		</div>
	);
}
