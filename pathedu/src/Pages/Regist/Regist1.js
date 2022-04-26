import React, { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom';

async function ServerCheckEmail(email) {
	console.log(email)
	const response = await fetch('https://www.mecallapi.com/api/users?search=karn', {
		method: 'POST',
		body: JSON.stringify({ email })
	}).then(data => data.json())
	if (response.ok) {
		if (email)
			throw new Error("중복 email") // TODO 이메일 중복체크
		return (email);
	}
	throw new Error("서버 error")
}

export function Registuser1({ profile, makeProfile, setPage }) {
	const [emailForm, setEmailForm] = useState(true)
	const [duplicateEmail, setDuplicateEmail] = useState(true)
	const [passwordForm, setPasswordForm] = useState(true)
	const [confirmPasswordForm, setConfirmPasswordForm] = useState(true)
	const [checkBox, setCheckBox] = useState(true)
	const [secret, SetSecret] = useState('v-pw')
	const [secret2, SetSecret2] = useState('v-pw')

	const onSecret = (e) => {
		e.preventDefault()
		SetSecret('v-pw')
	}
	const onUnSecret = (e) => {
		e.preventDefault()
		SetSecret('v-pw disb')
	}
	const onSecret2 = (e) => {
		e.preventDefault()
		SetSecret2('v-pw')
	}
	const onUnSecret2 = (e) => {
		e.preventDefault()
		SetSecret2('v-pw disb')
	}
	
	const checkEmail = async () => {
		try {
			if (validator.isEmail(profile.eMail)) {
				const response = await ServerCheckEmail(profile.email);
				console.log("email ok")
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
		if (!validator.isEmail(form.eMail.value)) {
			setEmailForm(false); result++;
		}
		else
			setEmailForm(true)
		if (!validator.isByteLength(form.password.value, 8, 20)) {
			setPasswordForm(false); result++;
		}
		else
			setPasswordForm(true)
		if (form.password.value != form.confirmPassword.value) {
			setConfirmPasswordForm(false); result++;
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
	const pageChange = () => {
		if (checkform())
			setPage('end')
	}
	return (
		<>
			<div className="login-join">
				<h1><span>PATH</span></h1>
				<h2>회원가입</h2>
				<div className="join-step">
					<strong>1</strong>
					<span>2</span>
				</div>
				<fieldset>
					<legend>로그인</legend>
					<form name="profile">
						<ul>
							<li className='email'>
								<label htmlFor="eMail">이메일</label>
								<input type="text" id="eMail" name="eMail" placeholder="이메일" onChange={makeProfile} value={profile.eMail} />
								<button type="button" onClick={checkEmail}>중복확인</button>
								<p className="desc">사용할 수 있는 이메일입니다.</p>
								{emailForm === false && (<p className="error" style={{ color: "red" }}> 이메일 형태로 입력해주세요</p>)}
								{emailForm === true && duplicateEmail === false && (<a style={{ color: "red" }}> 중복된이메일입니다</a>)}
							</li>
							<li>
								<label htmlFor="pw">비밀번호(8-20자 이내)</label>
								{secret === "v-pw" && (<input type="password" id="pw" name="password" placeholder="비밀번호확인" value={profile.password} onChange={makeProfile} />)}
								{secret === "v-pw disb" && (<input type="text" id="pw" name="password" placeholder="비밀번호확인" value={profile.password} onChange={makeProfile} />)}
								<button type="button" className={secret} onMouseDown={onUnSecret} onMouseUp={onSecret}><span>비밀번호 보기</span></button>
								{passwordForm === false && (<p className="error" style={{ color: "red" }}> 비밀번호는 8-20자 이내로 입력해야합니다.</p>)}
							</li>
							<li>
								<label htmlFor="pwN">비밀번호 확인</label>
								{secret2 === "v-pw" && (<input type="password" id="pwN" name="confirmPassword" placeholder="비밀번호확인" value={profile.confirmPassword} onChange={makeProfile} />)}
								{secret2 === "v-pw disb" && (<input type="text" id="pwN" name="confirmPassword" placeholder="비밀번호확인" value={profile.confirmPassword} onChange={makeProfile} />)}
								<button type="button" className={secret2} onMouseDown={onUnSecret2} onMouseUp={onSecret2}><span>비밀번호 숨기기</span></button>
								{confirmPasswordForm === false && (<p className="error" style={{ color: "red" }} > 비밀번호가 일치하지않습니다</p>)}
							</li>
						</ul>
						<div className="agree">
							<p><input type="checkbox" id="agr1" name="checkbox1" /><label htmlFor="agr1">이용약관 및 개인정보처리방침에 동의합니다.</label></p>
							{checkBox === false && (<a style={{ color: "red" }} > 이용약관 및 개인정보처리 방침에 동의를 해주세요</a>)}
							<p><input type="checkbox" id="agr2" name="checkbox2" /><label htmlFor="agr2">서비스 정보 및 혜택 수신에 동의합니다. (선택)</label></p>
						</div>
						<button type="button" className="btn-def" value="다음" onClick={pageChange}>다음</button>
						이미 계정이 있으신가요? <Link to="/login"><button>로그인</button></Link>
					</form>
				</fieldset>
				<div className="sch">
					<p>이미 계정이 있으신가요?</p>
					<Link to="/login" className="pt">로그인</Link>
				</div>
			</div>
		</>
	)
}