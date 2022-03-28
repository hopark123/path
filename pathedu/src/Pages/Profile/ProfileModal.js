import { useState } from 'react';
import Modal from 'react-modal';


function EditProfilePage() {
	return (
	<form name="profile">
		profilePage
	</form>
	)
}

function ChangePasswordPage() {
	return (
	<form name="changePassword">
		changePassword
	</form>
	)
}

function TermsPage() {
	return (
	<form name="terms">
		Terms
	</form>
	)
}
function PolicyPage() {
	return (
	<form name="policy">
		Policy
	</form>
	)
}

export function ProfileModal({openProfile, setOpenProfile}) {
	const [page, setPage] = useState('')

	const user = JSON.parse(localStorage.getItem('user')); // localstage
	const onPages = (e) => {
		// console.log(user) //localstage
		e.preventDefault();
		if (page === e.target.name)
			setPage(' ')
		else
			setPage(e.target.name)
	}

	const onProfile = (e) => {
		e.preventDefault();
		if (e.target.name == 'profile')
			setOpenProfile(true)
		else if (e.target.name == 'x')
			setOpenProfile(false)
		else if (e.target.name == 'cancel') {
			setOpenProfile(false)
			console.log("취소함수")
		}
		else if (e.target.name == '') {
			setOpenProfile(false)
			console.log("저장함수")
		}
	}

	return (
		<Modal isOpen={openProfile} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={onProfile} name="x"/><br/>
			image<br/>
			<input type="button" value="사진업로드" onClick={onPages}/><br/>
			<input type="button" value="프로필편집" name="editProfile" onClick={onPages}/>
			{page === "editProfile" === true && (<EditProfilePage/>)}<br/>
			<input type="button" value="비밀번호변경" name="changePassword" onClick={onPages}/>
			{page === "changePassword" === true && (<ChangePasswordPage/>)}<br/>
			<input type="button" value="이용약관" name="terms" onClick={onPages}/>
			{page === "terms" === true && (<TermsPage/>)}<br/>
			<input type="button" value="개인정보처리방침" name="policy" onClick={onPages}/>
			{page === "policy" === true && (<PolicyPage/>)}<br/>
			<input type="button" value="취소" onClick={onProfile} name="cancel"/>
			<input type="button" value="저장" onClick={onProfile} name="save"/>
			<input type="button" value="로그아웃"/>
		</Modal>
	)
}
