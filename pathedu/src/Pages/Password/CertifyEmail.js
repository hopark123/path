import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import {LayoutLoginFooter, LayoutLoginHead} from "../Login/LayoutLogin"
import validator from 'validator'

async function fetchEmail(email) { //TODO 이메일 인증번호 발송 만들기
	const response = await fetch("http://localhost:8888/user", {
		method: 'POST',
		body: JSON.stringify({email})
	}).then(data =>data.json())
	if (response.ok) {
		const users = await response.json();
		const user = users.find((user) => user.email === email);
		if (!user) {
			throw new Error("등록되지 않은 이메일입니다.");
		}
		return user;
	}
	throw new Error("서버 통신이 원활하지 않습니다.");
}

export function CertifyEmail({setPage}) {
	const [certify, setCertify] = useState({email:"", certify:""})
	const [emailForm, setEmailForm] = useState(true)
	const [certifyOk, setCertifyOk] = useState(true)
	const onChange = (e) => {
		setCertify({
			...certify,
			[e.target.name]: e.target.value,
		});
	}

	const onCheckEmail = async() => {
		try {
			if (validator.isEmail(certify.email)) {
				const user = await fetchEmail(certify.email);
				setEmailForm(true)
				console.log("이메일발송만들기")
			}
			else
				setEmailForm(false)
		}
		catch (error) {
			window.alert(error);
		}
	}

	const pageChange = () => { 
		let form = document.certifyEmail
		console.log(form.certify)
		if (form.certify.value == 1) { //TODO 인증번호 비교하기
			setCertifyOk(true);
			setPage('passwordChange')
		}
		else {
			setCertifyOk(false);
		}
	}
	return (
	<>	
		<h1>비밀번호 재설정</h1>
		<form name="certifyEmail">
			<input type="email" placeholder="이메일을 입력해 주세요" name="email" onChange={onChange}></input>
			<input type="button" name="send"  value="인증번호 발송" onClick={onCheckEmail}></input><br/>
			{emailForm === false && (<a style={{color:"red"}}> 이메일 형태로 입력해주세요<br/></a>)}
			<input type="text" name="certify" placeholder="인증번호"  onChange={onChange}></input>	<br/>
			<input type="button" value="다음" onClick={pageChange}/>
			{certifyOk === false && (<a style={{color:"red"}}> 인증번호가 틀렸습니다<br/></a>)}
		</form>
		<Link to="/Login">
			<button>로그인 화면으로 이동</button>
		</Link>
	</>
	);
}