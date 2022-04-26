import { useState } from 'react';
import { Body, DefProfile } from "./index"

export function MyPage({ openProfile, setOpenProfile }) {
	const user = JSON.parse(localStorage.getItem('user')); // localstage
	const [profile, setProfile] = useState({
		eMail: "aa@aa.com",
		password: "123123123",
		confirmPassword: "123123123",
		name: "송하영",
		phone: "010-1234-5678",
		parentPhone: "010-4321-8765",
		nowSchool: "서울고",
		year: "2학년",
		weak: "과학",
		schoolGrade: "2등급",
		satGrade: "2등급",
		destSchool: "서울대/경영",
		oldPassword: "",
		savePossble: false,
	});
	console.log(profile)
	const makeProfile = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProfile({
			...profile,
			[name]: value
		});
	}

	const onProfile = (e) => {
		e.preventDefault();
		console.log(e.target.name)
		if (e.target.name == 'cancel') {
			setOpenProfile(false)
			console.log("취소")

		}
		else if (e.target.name == 'logout') {
			setOpenProfile(false)
			console.log("로그아웃")

		}
		else if (e.target.name == 'save') {
			setOpenProfile(false)
			console.log("저장함수")
		}
	}

	return (
		<>
			<div className='dimd-layer'>
				<section className='def-layer'>
					<div className='tit-w'>
						<h1>마이페이지</h1>
					</div>
					<div className='mypage-w'>
						<div className='inner'>
							<DefProfile profile={profile} makeProfile={makeProfile}/>
							<Body profile={profile} makeProfile={makeProfile} setProfile={setProfile}/>
						</div>
						<div className="btn">
							<button type="button" onClick={onProfile} name="cancel" >취소</button>
							<button type="button" onClick={onProfile} name="save" className="actv">저장</button>
							<button type="button" onClick={onProfile} name="logout" className="logout">로그아웃</button>
						</div>
					</div>
					<div className="btn-close">
						<button type="button" onClick={onProfile} name="cancel"><span>팝업 닫기</span></button>
					</div>
				</section>
			</div>
		</>
	)
}
/*

<Modal isOpen={openProfile} ariaHideApp={false} name="modal">
	<input type="button" value="X" onClick={onProfile} name="x" /><br />
	image<br />
	<input type="button" value="사진업로드" onClick={onPages} /><br />
	<input type="button" value="프로필편집" name="editProfile" onClick={onPages} />
	{page === "editProfile" === true && (<EditProfilePage />)}<br />
	<input type="button" value="비밀번호변경" name="changePassword" onClick={onPages} />
	{page === "changePassword" === true && (<ChangePasswordPage />)}<br />
	<input type="button" value="이용약관" name="terms" onClick={onPages} />
	{page === "terms" === true && (<TermsPage />)}<br />
	<input type="button" value="개인정보처리방침" name="policy" onClick={onPages} />
	{page === "policy" === true && (<PolicyPage />)}<br />
	<input type="button" value="취소" onClick={onProfile} name="cancel" />
	<input type="button" value="저장" onClick={onProfile} name="save" />
	<input type="button" value="로그아웃" />
</Modal>
*/