import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reduxForm} from '../../Redux/FormReducer';

async function serverRegist(form) {
	console.log(form)
	return fetch('https://www.mecallapi.com/api/users?search=karn', {
	  method: 'POST`',
	  body: JSON.stringify({form})
	})
	.then(data => data.json())
}

export function Registuser2({profile, makeProfile, setProfile, pageChange}) {
	const [nameForm, setNameForm] = useState(true)
	const [phoneForm, setPhoneForm] = useState(true)
	const [parentPhoneForm, setParentPhoneForm] = useState(true)
	const [schoolForm, setSchoolForm] = useState(true)
	/* 
		TODO ....나머지 포멧
	*/

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onReduxForm = form =>dispatch(reduxForm(form));
	
	function checkform() {
		let form = document.profile
		let result = 0;
		if (form.name.value == "") {
			setNameForm(false);		result++;
		}
		else
			setNameForm(true)
		if (form.phone.value == "") {
			setPhoneForm(false);		result++;
		}
		else
			setPhoneForm(true)
		if (form.parentPhone.value == "") {
			setParentPhoneForm(false);		result++;
		}
		else
			setParentPhoneForm(true)
		if (form.nowSchool.value == "") {
			setSchoolForm(false);		result++;
		}
		else
			setSchoolForm(true)
		if (result == 0)
			return (true);
		return (false);
	}

	const onCreate = async() => {
		let form = document.profile
		onReduxForm(form);
		console.log(checkform())
		if (checkform()) {
			const response = await serverRegist(profile);
			if ('id' in response) { //TODO response 제대로
				setProfile('');
				navigate("/Login");
			}
		}
	}
	return (
	<>
	<form name="profile">
		<input type="text" name="name" onChange={makeProfile} value={profile.name} placeholder="이름(본명)" /> <br/>
		{nameForm === false && (<a style={{color:"red"}}> 이름을 입력해주세요<br/></a>)}
		<input type="text" name="phone" onChange={makeProfile} value={profile.phone} placeholder="휴대폰 번호"/> <br/>
		{phoneForm === false && (<a style={{color:"red"}}> 휴대폰 번호를 입력해주세요<br/></a>)}
		<input type="text" name="parentPhone" onChange={makeProfile} value={profile.parentPhone} placeholder="학부모 휴대폰 번호"/><br/>
		{parentPhoneForm === false && (<a style={{color:"red"}}> 학부모 휴대폰 번호를 입력해주세요<br/></a>)}
		<input type="text" name="nowSchool" onChange={makeProfile} value={profile.nowSchool} placeholder="재학중인 학교"/><br/>
		{schoolForm === false && (<a style={{color:"red"}}> 재학중인 학교명을 입력해주세요<br/></a>)}
		<select placeholder="학년 선택" name="year" onChange={makeProfile} value={profile.year}>
			<option value='' disabled hidden>학년 선택</option>
			<option value="1학년">1학년</option>
			<option value="2학년">2학년</option>
			<option value="3학년">3학년</option>
		</select>	<br/>
		<select placeholder="취약 과목 선택" name="weak" onChange={makeProfile} value={profile.weak}>
			<option value='' disabled hidden>취약 과목 선택</option>
			<option value="국어">국어</option>
			<option value="영어">영어</option>
			<option value="수학">수학</option>
		</select>	<br/>
		<select placeholder="최근 내신 등급 선택" name="schoolGrade" onChange={makeProfile} value={profile.schoolGrade}>
			<option value='' disabled hidden>최근 내신 등급 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<select placeholder="최근 모의고사 등급 선택" name="satGrade" onChange={makeProfile} value={profile.satGrade}>
			<option value='' disabled hidden>최근 모의고사 선택</option>
			<option value="1등급">1등급</option>
			<option value="2등급">2등급</option>
			<option value="3등급">3등급</option>
		</select>	<br/>
		<input type="text" name="destSchool" onChange={makeProfile} value={profile.makeProfile} placeholder="목표대학 / 전공"></input>	<br/>
		<input type="button" onClick={onCreate} name="profile" value="완료"></input> <br/>
		<input type="button" onClick={checkform} value="이전으로"></input>
	</form>
	</>
	);
}



/*
Post
{
    "password": "password1234",
    "mail": "asdf1234@gmail.com",
    "phoneNumber": "0000000000"
		"metadata": {
				"schoolName": "패쓰고등학교",
				"schoolGrade": "3",
				"weakSubject": "수학",
				"schoolExamGrade": "2",
				"mockExamGrade": "2",
				"targetUniv": {
						"univName": "서울대학교",
						"major": "컴퓨터공학과"
				}
		}
}
Response
{
     "id": 1,
     "mail": "asdf1234@gmail.com",
     "phoneNumber": "0000000000",
     "userName": "김지민",
}

*/