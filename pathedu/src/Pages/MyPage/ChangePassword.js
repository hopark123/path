import { useState } from 'react';
import validator from 'validator'



export function ChangePassword(props) {
	const {profile, setProfile} = props
	const [select, SetSelect] = useState('')
	const [secret, SetSecret] = useState('v-pw')
	const [secretN1, SetSecretN1] = useState('v-pw')
	const [secretN2, SetSecretN2] = useState('v-pw')
	const [passwordForm, setPasswordForm] = useState(true)
	const [confirmPasswordForm, setConfirmPasswordForm] = useState(true)
	const [newPassword, setNewPassword] = useState({
		oldPassword: "",
		password: "",
		confirmPassword: "",
	})

	const onSelect = (e) => {
		e.preventDefault();
		if (select == '')
			SetSelect('selected');
		else
			SetSelect('');
	}
	const onSecret = (e) => {
		e.preventDefault()
		SetSecret('v-pw')
	}
	const onUnSecret = (e) => {
		e.preventDefault()
		SetSecret('v-pw disb')
	}
	const onSecretN1 = (e) => {
		e.preventDefault()
		SetSecretN1('v-pw')
	}
	const onUnSecretN1 = (e) => {
		e.preventDefault()
		SetSecretN1('v-pw disb')
	}
	const onSecretN2 = (e) => {
		e.preventDefault()
		SetSecretN2('v-pw')
	}
	const onUnSecretN2 = (e) => {
		e.preventDefault()
		SetSecretN2('v-pw disb')
	}

	const checkOldPassword = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({
			...profile,
			"oldPassword" : value
		});
	}
	const changePassword = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setNewPassword({
			...newPassword,
			[name]: value
		});
		if (!validator.isByteLength(value, 8, 20)) {
			setPasswordForm(false);
		}
		else {
			setPasswordForm(true)
		}
	}
	
	const changeConfirmPassword = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setNewPassword({
			...newPassword,
			[name]: value
		});
		if (name == "confirmPassword" && value == newPassword.password) {
			setConfirmPasswordForm(true);
			console.log(setProfile)
			setProfile({
				...profile,
				"password" : newPassword.password,
				"confirmPassword": newPassword.confirmPassword
			});
		}
		else
			setConfirmPasswordForm(false);
	}
	
	return (
		<>
			<li className={select}>
				<a href="#" className="mym2" onClick={onSelect}>비밀번호 변경</a>
				<div className="in-tbl">
					<table className="type-pw">
						<caption>비밀번호 변경</caption>
						<tbody>
							<tr>
								<th scope="row"><label htmlFor="pw">기존 비밀번호</label></th>
								<td>
									{secret === "v-pw" && (<input type="password" id="pw" name="oldPassword" value={profile.oldPassword} onChange={checkOldPassword}/>)}
									{secret === "v-pw disb" && (<input type="text" id="pw" name="oldPassword" value={profile.oldPassword} onChange={checkOldPassword}/>)}
									<button type="button" className={secret} onMouseDown={onUnSecret} onMouseUp={onSecret}><span>비밀번호 보기</span></button>
									{profile.savePossble === false && (<p className="err">비밀번호가 일치하지 않습니다.</p>)}
								</td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="nPw">신규 비밀번호</label></th>
								<td>
									{secretN1 === "v-pw" && (<input type="password" id="Pw"  name="password" value={newPassword.password} onChange={changePassword}/> ) }
									{secretN1 === "v-pw disb" && (<input type="text" id="Pw" name="password" value={newPassword.password} onChange={changePassword}/>)}
									<button type="button" className={secretN1} onMouseDown={onUnSecretN1} onMouseUp={onSecretN1}><span>비밀번호 보기</span></button>
									{passwordForm === false && (<p className="err">비밀번호는 8-20자 이내로 입력해야합니다.</p>)}
								</td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="nPwChk">신규 비밀번호 확인</label></th>
								<td>
									{secretN2 === "v-pw" && (<input type="password"  id="nPwChk" name="confirmPassword" value={newPassword.confirmPassword} onChange={changeConfirmPassword}/>)}
									{secretN2 === "v-pw disb" && (<input type="text" id="nPwChk" name="confirmPassword" value={newPassword.confirmPassword} onChange={changeConfirmPassword}/>)}
									<button type="button" className={secretN2} onMouseDown={onUnSecretN2} onMouseUp={onSecretN2}><span>비밀번호 보기</span></button>
									{confirmPasswordForm === false && (<p className="err">비밀번호가 일치하지 않습니다.</p>)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</li>
		</>
	)
}
