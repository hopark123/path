import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { reduxForm} from '../../Redux/FormReducer';
import {LayoutLoginFooter, LayoutLoginHead} from "../Login/LayoutLogin"
import validator from 'validator'
import { Registuser1 } from "./Regist1"
import { Registuser2 } from "./Regist2"


export function RegistPages() {
	const [page, setPage] = useState('start')
	const [profile, setProfile] = useState({
		email: "",
		password: "",
		confirmPassword:"",
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
	const onReduxForm = profile =>dispatch(reduxForm(profile));
	
	const makeProfile = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({
			...profile,
			[name] : value
		});
	}	
	return (
	<div className='titleflex'>
		<br/><LayoutLoginHead/><br/>
		{page === 'start' && (<Registuser1 profile={profile} makeProfile={makeProfile} setPage={setPage}/>)}
		{page === 'end' && (<Registuser2 profile={profile} makeProfile={makeProfile} setProfile={setProfile} pageChange={() => {setPage('end')}}/>)}
		<br/><LayoutLoginFooter/><br/>
	</div>
	);
}
