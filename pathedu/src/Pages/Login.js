import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export const fetchLogin = async ({ email, password }) => {
	const response = await fetch("http://localhost:8888/user");
	if (response.ok) {
		const users = await response.json();
		const user = users.find((user) => user.email == email);
		if (!user || user.password !== password) {
			throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
		}

		return user;
	}
	throw new Error("서버 통신이 원활하지 않습니다.");
}

export function Login() {
	// const {data} = useSelector(state => ({ data:state.FormReducer.form}));
	const navigate = useNavigate();
	const [logging, setLogging] = useState({email:"", password:"",});
	const onChangeAccount = (e) => {
		setLogging({
			...logging,
			[e.target.name]: e.target.value,
		});
		// console.log({data})
	}
	const onSubmitAccount = async() => {
		try {
			const user = await fetchLogin(logging);
			navigate("/home");
		}
		catch (error) {
			window.alert(error);
		}
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


export default Login;
