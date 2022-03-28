import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import {LayoutLoginFooter, LayoutLoginHead} from "../Login/LayoutLogin"
import validator from 'validator'
import { CertifyEmail } from "./CertifyEmail"

export function PasswordChange() {
	const navigate = useNavigate();
	const onChange = () => {
		let form = document.changePassword
		if (form.password.value != form.confirmPassword.value)
			alert("비밀번호가 일치하지 않습니다");
		else {
			navigate("/Login");
			console.log("비밀번호변경 만들기");
		}
	} 

	return (
	<>
		<h1>비밀번호 재설정</h1>
		<form name="changePassword">
			<input type="password" name="password" placeholder='새로운 비밀번호(8-20자 이내)'></input><br/>
			<input type="password" name="confirmPassword" placeholder='새로운 비밀번호 확인'></input><br/>
			<input type="button" value="완료" onClick={onChange}></input><br/>
		<Link to="/Login"><button>로그인화면으로 이동</button></Link>
		</form>
	</>
	);
}