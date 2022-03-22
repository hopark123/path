import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { reduxForm} from '../Redux/FormReducer';
import {LayoutLoginFooter, LayoutLoginHead} from "./LayoutLogin"
import validator from 'validator'
import { Password } from './Password';

//todo
async function loginUser() {
	let form = document.profile
	let username = form.email.value
	return fetch('https://www.mecallapi.com/api/users?search=karn', {
	  method: 'GET`',
	})
	.then(data => data.json())
}

function Createuser1({form, makeForm, setPage}) {
	const [emailForm, setEmailForm] = useState(true)
	const [passwordForm, setPasswordForm] = useState(true)
	const [confirmPasswordForm, setConfirmPasswordForm] = useState(true)
	const [checkBox, setCheckBox] = useState('false')
	
	function checkform() {
		let form = document.profile
		let result = 0;
		if (!validator.isEmail(form.email.value)) {
			setEmailForm(false)
			result++;
		}
		else
			setEmailForm(true)
		if (!validator.isByteLength(form.password.value, 8, 20)) {
			setPasswordForm(false)
			result++;
		}
		else
			setPasswordForm(true)
		if (form.password.value != form.confirmPassword.value) {
			setConfirmPasswordForm(false);
			result++;
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
		<input type="email" name="email" placeholder="이메일" onChange={makeForm} value={form.email}/>
			<input type="button" value="중복확인" onClick={loginUser}/> <br/>
			{emailForm === false && (<a style={{color:"red"}}> 이메일 형태로 입력해주세요<br/></a>)}
		<input type="password" name="password" placeholder="비밀번호(8-20)자이내" value={form.password} onChange={makeForm}/>	<br/>
			{passwordForm === false && (<a style={{color:"red"}}> 비밀번호는 8-20자 이내로 입력해야합니다.<br/></a>)}
		<input type="password" name="confirmPassword" placeholder="비밀번호확인" value={form.confirmPassword} onChange={makeForm}/>	<br/>
			{confirmPasswordForm === false && (<a style={{color:"red"}} > 패스워드가 일치하지않습니다<br/></a>)}
		<input type="checkbox" name="checkbox1"/> 이용약관 및 개인정보처리 방침에 동의합니다.	<br/>
		<input type="checkbox" name="checkbox2"/> 서비스 정보 및 해택 수신에 동의합니다. (선택)	<br/>
		<input type="button"  value="다음" onClick={pageChange}/> <br/>
		이미 계정이 있으신가요? <Link to="/login"><button>로그인</button></Link>
	</form>
	</>
	)
}

function Createuser2({form, makeForm, setForm, pageChange}) {
	const [nameForm, setNameForm] = useState(true)
	const [phoneForm, setPhoneForm] = useState(true)
	const [parentPhoneForm, setParentPhoneForm] = useState(true)
	const [schoolForm, setSchoolForm] = useState(true)
	/* 
		....
	*/

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onReduxForm = form =>dispatch(reduxForm(form));
	
	function checkform() {
		let form = document.profile
		let result = 0;
		if (form.name.value == "") {
			setNameForm(false)
			result++;
		}
		else
			setNameForm(true)
		if (form.phone.value == "") {
			setPhoneForm(false)
			result++;
		}
		else
			setPhoneForm(true)
		if (form.parentPhone.value == "") {
			setParentPhoneForm(false)
			result++;
		}
		else
			setParentPhoneForm(true)
		if (form.nowSchool.value == "") {
			setSchoolForm(false)
			result++;
		}
		else
			setSchoolForm(true)
		if (result == 0)
			return (true);
		return (false);
	}
	const onCreate = () => {
		let form = document.profile
		onReduxForm(form);
		console.log(checkform())
		if (checkform()) {
			setForm('');
			navigate("/Login");
		}
	}
	return (
	<>
	<form name="profile">
		<input type="text" name="name" onChange={makeForm} value={form.name} placeholder="이름(본명)" /> <br/>
		{nameForm === false && (<a style={{color:"red"}}> 이름을 입력해주세요<br/></a>)}
		<input type="text" name="phone" onChange={makeForm} value={form.phone} placeholder="휴대폰 번호"/> <br/>
		{phoneForm === false && (<a style={{color:"red"}}> 휴대폰 번호를 입력해주세요<br/></a>)}
		<input type="text" name="parentPhone" onChange={makeForm} value={form.parentPhone} placeholder="학부모 휴대폰 번호"/><br/>
		{parentPhoneForm === false && (<a style={{color:"red"}}> 학부모 휴대폰 번호를 입력해주세요<br/></a>)}
		<input type="text" name="nowSchool" onChange={makeForm} value={form.nowSchool} placeholder="재학중인 학교"/><br/>
		{schoolForm === false && (<a style={{color:"red"}}> 재학중인 학교명을 입력해주세요<br/></a>)}
		<select placeholder="학년 선택" name="year" onChange={makeForm} value={form.year}>
			<option value='' disabled hidden>학년 선택</option>
			<option value="1학년">1학년</option>
			<option value="2학년">2학년</option>
			<option value="3학년">3학년</option>
		</select>	<br/>
		<select placeholder="취약 과목 선택" name="weak" onChange={makeForm} value={form.weak}>
			<option value='' disabled hidden>취약 과목 선택</option>
			<option value="국어">국어</option>
			<option value="영어">영어</option>
			<option value="수학">수학</option>
		</select>	<br/>
		<select placeholder="최근 내신 등급 선택" name="schoolGrade" onChange={makeForm} value={form.schoolGrade}>
			<option value='' disabled hidden>최근 내신 등급 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<select placeholder="최근 모의고사 등급 선택" name="satGrade" onChange={makeForm} value={form.satGrade}>
			<option value='' disabled hidden>최근 모의고사 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<input type="text" name="destSchool" onChange={makeForm} value={form.makeForm} placeholder="목표대학 / 전공"></input>	<br/>
		<input type="button" onClick={onCreate} name="form" value="완료"></input> <br/>
		<input type="button" onClick={checkform} value="이전으로"></input>
	</form>
	</>
	);
}


export function RegistPages() {
	const [page, setPage] = useState('end')
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
	
	const makeForm = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setForm({
			...form,
			[name] : value
		});
	}	
	return (
	<>
		<br/><LayoutLoginHead/><br/>
		{page === 'start' && (<Createuser1 form={form} makeForm={makeForm} setPage={setPage}/>)}
		{page === 'end' && (<Createuser2 form={form} makeForm={makeForm} setForm={setForm} pageChange={() => {setPage('end')}}/>)}
		<br/><LayoutLoginFooter/><br/>
	</>
	);
}