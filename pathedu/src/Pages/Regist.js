import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { reduxForm} from '../Redux/FormReducer';
import {LayoutLoginFooter, LayoutLoginHead} from "./LayoutLogin"



async function loginUser() {
	let form = document.profile
	let username = form.email.value
	return fetch('https://www.mecallapi.com/api/users?search=karn', {
	  method: 'GET`',
	})
	.then(data => data.json())
}

function Createuser1({form, onChange, pageChange}) {
	return (
	<>
	<form name="profile">
		<input type="email" name="email" placeholder="이메일" onChange={onChange} value={form.email}/>
			<input type="button" value="중복확인" onClick={loginUser}/> <br/>
		<input type="password" name="password" placeholder="비밀번호(8-20)자이내" value={form.password} onChange={onChange}/>	<br/>
		<input type="password" name="confirmPassword" placeholder="비밀번호확인" value={form.confirmPassword} onChange={onChange}/>	<br/>
		<input type="checkbox" name="checkbox1"/> 이용약관 및 개인정보처리 방침에 동의합니다.	<br/>
		<input type="checkbox" name="checkbox2"/> 서비스 정보 및 해택 수신에 동의합니다. (선택)	<br/>
		<input type="button"  value="다음" onClick={pageChange}/> <br/>
		이미 계정이 있으신가요? <Link to="/login"><button>로그인</button></Link>
	</form>
	</>
	)
}

function Createuser2({form, onChange, onCreate, pageChange}) {
	return (
	<>
	<form name="profile">
		<input type="text" name="name" onChange={onChange} value={form.name} placeholder="이름(본명)" /> <br/>
		<input type="text" name="phone" onChange={onChange} value={form.phone} placeholder="휴대폰 번호"/> <br/>
		<input type="text" name="parentPhone" onChange={onChange} value={form.parentPhone} placeholder="학부모 휴대폰 번호"/><br/>
		<input type="text" name="nowSchool" onChange={onChange} value={form.nowSchool} placeholder="재학중인 학교"/><br/>
		<select placeholder="학년 선택" name="year" onChange={onChange} value={form.year}>
			<option value='' disabled hidden>학년 선택</option>
			<option value="1학년">1학년</option>
			<option value="2학년">2학년</option>
			<option value="3학년">3학년</option>
		</select>	<br/>
		<select placeholder="취약 과목 선택" name="weak" onChange={onChange} value={form.weak}>
			<option value='' disabled hidden>취약 과목 선택</option>
			<option value="국어">국어</option>
			<option value="영어">영어</option>
			<option value="수학">수학</option>
		</select>	<br/>
		<select placeholder="최근 내신 등급 선택" name="schoolGrade" onChange={onChange} value={form.schoolGrade}>
			<option value='' disabled hidden>최근 내신 등급 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<select placeholder="최근 모의고사 등급 선택" name="satGrade" onChange={onChange} value={form.satGrade}>
			<option value='' disabled hidden>최근 모의고사 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<input type="text" name="destSchool" onChange={onChange} value={form.OnChange} placeholder="목표대학 / 전공"></input>	<br/>
		<input type="button" onClick={onCreate} name="form" value="완료"></input> <br/>
		<input type="button" onClick={pageChange} value="이전으로"></input>
	</form>
	</>
	);
}


export function RegistPages() {
	
	const [page, setPage] = useState('start')
	const [form, setForm] = useState({
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
	const dispatch = useDispatch();
	const onReduxForm = form =>dispatch(reduxForm(form));
	const navigate = useNavigate();
	
	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setForm({
			...form,
			[name] : value
		});
	}
	const onCreate = () => {
		let form = document.profile
		if (form.name.value == "" || form.phone.value == "" || form.parentPhone.value == "" || form.nowSchool.value == "" || form.destSchool.value == "")
			alert("빈칸이있습니다.");
		else {
			onReduxForm(form);
			setForm('');
			navigate("/Login");
		}
	}

	const pageChange = () => {
		let form = document.profile
		if (form.password.value != form.confirmPassword.value)
			alert("패스워드가 일치하지않습니다");
		else if (form.email.value == "" || form.password.value == "" || form.confirmPassword == "" || !form.checkbox1.checked)
			alert("빈칸이있습니다.");
		else
			setPage('end')
	}
	
	return (
	<>
		<br/><LayoutLoginHead/><br/>
		{page === 'start' && (<Createuser1 form={form} onChange={onChange} pageChange={pageChange}/>)}
		{page === 'end' && (<Createuser2 form={form} onChange={onChange} onCreate={onCreate} pageChange={() => {setPage('end')}}/>)}
		<br/><LayoutLoginFooter/><br/>
	</>
	);
}