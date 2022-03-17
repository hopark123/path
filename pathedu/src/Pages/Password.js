import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Login from './Login';



const fetchEmail = async (email) => {
	const response = await fetch("http://localhost:8888/user");
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

export function Password({pageChange}) {
	const [certify, setCertify] = useState({email:"", certify:""})
	
	const onChange = (e) => {
		setCertify({
			...certify,
			[e.target.name]: e.target.value,
		});
	}

	const onCheckAccount = async() => {
		try {
			const user = await fetchEmail(certify.email);
			console.log("이메일발송만들기")
		}
		catch (error) {
			window.alert(error);
		}
	}

	return (
	<>	
		<h1>비밀번호 재설정</h1>
		<form name="certiyEmail">
			<input type="email" placeholder="이메일을 입력해 주세요" name="email" onChange={onChange}></input>
			<input type="button" name="send"  value="인증번호 발송" onClick={onCheckAccount}></input><br/>
			<input type="text" placeholder="인증번호" name="certify" onChange={onChange}></input>	<br/>
			<input type="button" value="다음" onClick={pageChange}/>
		</form>
		<Link to="/Login" componet={<Login/>}>
			<button>로그인 화면으로 이동</button>
		</Link>
	</>
	);
}

export function PasswordReset2() {
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

export function PasswordReset() {
	// const [page, setPage] = useState('certifyEmail')
	const [page, setPage] = useState('passwordChange')

	return (
		<>
		{page === 'certifyEmail' && (<Password pageChange={() => setPage('passwordChange')}/>)}
		{page === 'passwordChange' && (<PasswordReset2/>)}
		</>
	)
}
