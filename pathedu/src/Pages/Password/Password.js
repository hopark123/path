import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import {LayoutLoginFooter, LayoutLoginHead} from "../Login/LayoutLogin"
import validator from 'validator'
import { CertifyEmail } from "./CertifyEmail"
import { PasswordChange } from './PasswordChange';

export function PasswordPage() {
	const [page, setPage] = useState('certifyEmail')
	return (
		<>
		<br/><LayoutLoginHead/><br/>
		{page === 'certifyEmail' && (<CertifyEmail setPage={setPage}/>)}
		{page === 'passwordChange' && (<PasswordChange/>)}
		<br/><LayoutLoginFooter/><br/>
		</>
	)
}
