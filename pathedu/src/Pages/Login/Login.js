import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { LayoutLoginFooter, LayoutLoginHead } from "../Login/LayoutLogin"

async function loginUser({ username, password }) {
	return fetch('https://www.mecallapi.com/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	})
		.then(data => data.json())
}

/* test       karn.yong@mecallapi.com /  mecallapi          */
function LoginHeader() {
	return (
		<head>
			<title>로그인 - PATH</title>
			<meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width, target-densitydpi=medium-dpi" />
			<link rel="stylesheet" href="css/style.css" />
		</head>
	)
}
export function Login() {
	const navigate = useNavigate();
	const [logging, setLogging] = useState({ username: "", password: "", });

	const onChangeAccount = (e) => {
		setLogging({
			...logging,
			[e.target.name]: e.target.value,
		});
	}
	const onSubmitAccount = async () => {
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
			<div className="wrapper bg-join">
				<LayoutLoginHead/>
				<main id="snContent">
					<div className="login-join">
						<h1><span>PATH</span></h1>
						<fieldset>
							<legend>로그인</legend>
							<ul>
								<li>
									<label htmlFor="eMail">이메일</label>
									<input id="username" name="username" type="text" placeholder='이메일' onChange={onChangeAccount}></input>
								</li>
								<li>
									<label htmlFor="pw">비밀번호</label>
									<input id="password" name="password" type="password" placeholder='비밀번호' onChange={onChangeAccount}></input>
								</li>
							</ul>
							<button type="button" className="btn-def" onClick={onSubmitAccount}>로그인</button>
						</fieldset>
						<div className="sch">
							<Link to="/password">
								비밀번호찾기
							</Link>
						</div>
					</div>
				</main>
				<hr/>
				<LayoutLoginFooter />
			</div>
		</>
	);
}


export default Login;
