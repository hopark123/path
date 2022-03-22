import { Axios } from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

async function loginUser({username, password}) {

	return fetch('https://www.mecallapi.com/api/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({username, password})
	})
	.then(data => data.json())
}

/* test       karn.yong@mecallapi.com /  mecallapi          */
export function Login() {
	const navigate = useNavigate();
	const [logging, setLogging] = useState({username:"", password:"",});

	const onChangeAccount = (e) => {
		setLogging({
			...logging,
			[e.target.name]: e.target.value,
		});
	}
	const onSubmitAccount = async() => {
		const response = await loginUser(logging);
		if ('accessToken' in response) {
			localStorage.setItem('accessToken', response['accessToken']);
			const user = localStorage.setItem('user', JSON.stringify(response['user']));
			navigate("/home");
		}
		else
			window.alert("error");
	}
	return (
		<>
		<div>
		<h2>Login</h2>
		</div>
		<div>
			<input id="username" name="username" type="text" placeholder='이메일' onChange={onChangeAccount}></input>
			<br/>
			<input id="password" name="password" type="password" placeholder='비밀번호' onChange={onChangeAccount}></input>
			<br/>
			<button onClick={onSubmitAccount}>로그인</button>
			<br/>
		</div>
		<Link to="/password">
			<button>비밀번호찾기</button>
		</Link>
	</>
	);
}


export default Login;

/*
async function loginUser({email, password}) {
	return fetch('http://localhost:8888/user', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({email, password})
	})
		.then(data => data.json())
	}
	
export function Login() {
	const navigate = useNavigate();
	// const [logging, setLogging] = useState({email:"", password:"",});
	const [logging, setLogging] = useState({username:"", password:"",});

	const onChangeAccount = (e) => {
		setLogging({
			...logging,
			[e.target.name]: e.target.value,
		});
	}
	const onSubmitAccount = async() => {
		const response = await loginUser(logging);
		if ('trID' in response) {
			localStorage.setItem('trID', response['trID']);
			localStorage.setItem('resultData', JSON.stringify(response['resultData']));
			navigate("/home");
			}
		else
			window.alert("error");
	}
	
	return (
		<>
		<div>
		<h2>Login</h2>
		</div>
		<div>
			<input id="email" name="email" type="text" placeholder='이메일' onChange={onChangeAccount}></input>
			<br/>
			<input id="password" name="password" type="password" placeholder='비밀번호' onChange={onChangeAccount}></input>
			<br/>
			<button onClick={onSubmitAccount}>로그인</button>
			<br/>
		</div>
		<Link to="/password">
			<button>비밀번호찾기</button>
		</Link>
	</>
	);
}
	
*/