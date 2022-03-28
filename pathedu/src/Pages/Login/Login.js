import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {LayoutLoginFooter, LayoutLoginHead} from "../Login/LayoutLogin"

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
		<br/><LayoutLoginHead/><br/>
			<input id="username" name="username" type="text" placeholder='이메일' onChange={onChangeAccount}></input>
			<br/>
			<input id="password" name="password" type="password" placeholder='비밀번호' onChange={onChangeAccount}></input>
			<br/>
			<button onClick={onSubmitAccount}>로그인</button>
			<br/>
		<Link to="/password">
			<button>비밀번호찾기</button>
		</Link>
		<br/><LayoutLoginFooter/><br/>
	</>
	);
}


export default Login;
