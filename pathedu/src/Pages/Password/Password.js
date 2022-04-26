import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import { LayoutLoginFooter, LayoutLoginHead } from "../Login/LayoutLogin"
import validator from 'validator'
import { CertifyEmail } from "./CertifyEmail"
import { PasswordChange } from './PasswordChange';

export function PasswordPage() {
	const [page, setPage] = useState('certifyEmail')
	return (
		<>
			<div className="wrapper bg-join">
				<LayoutLoginHead />
				<main id="snContent">
					<div className="login-join">
						<h1><span>PATH</span></h1>
						<h2>비밀번호 재설정</h2>
						<br /><LayoutLoginHead /><br />
						{page === 'certifyEmail' && (<CertifyEmail setPage={setPage} />)}
						{page === 'passwordChange' && (<PasswordChange />)}
					</div>
				</main>
				<LayoutLoginFooter />
			</div>
		</>
	)
}
