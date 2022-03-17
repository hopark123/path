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

export function ProfileModal(props) {
	const [page, setPage] = useState(
		{editProfile:false, changePassword:false, terms:false, policy:false})
	
	const onPages = (e) => {
		e.preventDefault();
		if (page[e.target.name] == true)
			setPage({
				...page,
				[e.target.name] : false
			})
		else
			setPage({
				...page,
				[e.target.name] : true
			})
	}

	return (
		<Modal isOpen={props.isOpen} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={props.clickOpen} name="x"/><br/>
			image<br/>
			<input type="button" value="사진업로드" onClick={onPages}/><br/>
			<input type="button" value="프로필편집" name="editProfile" onClick={onPages}/>
			{page.editProfile === true && (<EditProfilePage/>)}<br/>
			<input type="button" value="비밀번호변경" name="changePassword" onClick={onPages}/>
			{page.changePassword === true && (<ChangePasswordPage/>)}<br/>
			<input type="button" value="이용약관" name="terms" onClick={onPages}/>
			{page.terms === true && (<TermsPage/>)}<br/>
			<input type="button" value="개인정보처리방침" name="policy" onClick={onPages}/>
			{page.policy === true && (<PolicyPage/>)}<br/>
			<input type="button" value="취소" onClick={props.clickOpen} name="cancel"/>
			<input type="button" value="저장" onClick={props.clickOpen} name="save"/>
			<input type="button" value="로그아웃"/>
		</Modal>
	)
}
