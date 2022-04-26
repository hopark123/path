import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import { LayoutLoginFooter, LayoutLoginHead } from "../Login/LayoutLogin"
import validator from 'validator'
import { CertifyEmail } from "./CertifyEmail"

export function PasswordChange() {
	const navigate = useNavigate();
	const [secret, SetSecret] = useState('v-pw')
	const [secret2, SetSecret2] = useState('v-pw')
	const onNext = () => {
		let form = document.changePassword
		if (form.password.value != form.confirmPassword.value)
			alert("비밀번호가 일치하지 않습니다");
		else {
			navigate("/Login");
			console.log("비밀번호변경 만들기");
		}
	}
	const [profile, setProfile] = useState({
		password: "",
		confirmPassword: "",
	});

	const makePassword = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({
			...profile,
			[name]: value
		});
		console.log(profile)
	}

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

	return (
		<>
			<fieldset>
				<legend>로그인</legend>
				<ul>
					<form name="changePassword">
						<li>
							<label htmlFor="pw">새로운 비밀번호(8-20자 이내)</label>
							{secret === "v-pw" && (<input type="password" id="pw" name="password" placeholder="새로운 비밀번호(8-20자 이내)" value={profile.password}onChange={makePassword}/>)}
							{secret === "v-pw disb" && (<input type="text" id="pw" name="password" placeholder="새로운 비밀번호(8-20자 이내)" value={profile.password}  onChange={makePassword}/>)}
							<button type="button" className={secret} onMouseDown={onUnSecret} onMouseUp={onSecret}><span>비밀번호 보기</span></button>
						</li>
						<li>
							<label htmlFor="pwN">새로운 비밀번호 확인</label>
							{secret2 === "v-pw" && (<input type="password" id="pwN" name="confirmPassword" placeholder="새로운 비밀번호 확인"  value={profile.confirmPassword} onChange={makePassword}/>)}
							{secret2 === "v-pw disb" && (<input type="text" id="pwN" name="confirmPassword" placeholder="새로운 비밀번호 확인" value={profile.confirmPassword} onChange={makePassword}/>)}
							<button type="button" className={secret2} onMouseDown={onUnSecret2} onMouseUp={onSecret2}><span>비밀번호 보기</span></button>
						</li>
					</form>
				</ul>
				<button type="button" className="btn-def" onClick={onNext}>다음</button>
			</fieldset>
			<div className="sch">
				<Link to="/Login">
					로그인으로 이동
				</Link>
			</div>
		</>
	);
}