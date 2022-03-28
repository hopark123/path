import React, { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom';
async function ServerCheckEmail(email) {
	console.log(email)
	const response = await fetch('https://www.mecallapi.com/api/users?search=karn', {
		method: 'POST',
		body: JSON.stringify({email})
	}).then(data => data.json())
	if (response.ok) {
		if (email)
			throw new Error("중복 email") // TODO 이메일 중복체크
		return (email);
	}
	throw new Error("서버 error")
}

export function Registuser1({profile, makeProfile, setPage}) {
	const [emailForm, setEmailForm] = useState(true)
	const [duplicateEmail, setDuplicateEmail] = useState(true)
	const [passwordForm, setPasswordForm] = useState(true)
	const [confirmPasswordForm, setConfirmPasswordForm] = useState(true)
	const [checkBox, setCheckBox] = useState(true)
	
	const checkEmail = async() => {
		try {
			if (validator.isEmail(profile.email)) {
			const response = await ServerCheckEmail(profile.email);
			console.log ("email ok")
			setDuplicateEmail(true)
			setEmailForm(true);
			}
		}
		catch (error) {
			setEmailForm(false)
		}
	}
	function checkform() {
		let form = document.profile
		let result = 0;
		if (!validator.isEmail(form.email.value)) {
			setEmailForm(false);	result++;
		}
		else
			setEmailForm(true)
		if (!validator.isByteLength(form.password.value, 8, 20)) {
			setPasswordForm(false);		result++;
		}
		else
			setPasswordForm(true)
		if (form.password.value != form.confirmPassword.value) {
			setConfirmPasswordForm(false);		result++;
		}
		else
			setConfirmPasswordForm(true)
		if (form.checkbox1.checked) {
			setCheckBox(true);
		}
		else
			setCheckBox(false);
		if (result == 0 && form.checkbox1.checked)
			return (true);
		else
			return (false)
		}
		const pageChange= () =>{
			if (checkform())
				setPage('end')
		}
	return (
	<>
	<form name="profile">
		<input type="email" name="email" placeholder="이메일" onChange={makeProfile} value={profile.email}/>
			<input type="button" value="중복확인" onClick={checkEmail}/> <br/>
			{emailForm === false && (<a style={{color:"red"}}> 이메일 형태로 입력해주세요<br/></a>)}
			{emailForm === true && duplicateEmail === false && (<a style={{color:"red"}}> 중복된이메일입니다<br/></a>)}
		<input type="password" name="password" placeholder="비밀번호(8-20)자이내" value={profile.password} onChange={makeProfile}/>	<br/>
			{passwordForm === false && (<a style={{color:"red"}}> 비밀번호는 8-20자 이내로 입력해야합니다.<br/></a>)}
		<input type="password" name="confirmPassword" placeholder="비밀번호확인" value={profile.confirmPassword} onChange={makeProfile}/>	<br/>
			{confirmPasswordForm === false && (<a style={{color:"red"}} > 패스워드가 일치하지않습니다<br/></a>)}
		<input type="checkbox" name="checkbox1"/> 이용약관 및 개인정보처리 방침에 동의합니다.	<br/>
			{checkBox === false && (<a style={{color:"red"}} > 이용약관 및 개인정보처리 방침에 동의를 해주세요<br/></a>)}
		<input type="checkbox" name="checkbox2"/> 서비스 정보 및 해택 수신에 동의합니다. (선택)	<br/>
		<input type="button"  value="다음" onClick={pageChange}/> <br/>
		이미 계정이 있으신가요? <Link to="/login"><button>로그인</button></Link>
	</form>
	</>
	)
}