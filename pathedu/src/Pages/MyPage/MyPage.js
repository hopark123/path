import { useState } from 'react';
import Modal from 'react-modal';

function EditProfile() {
	return (
		<>
			<li className="selected">
				<a href="#" className="mym1">프로필 편집</a>
				<div className="in-tbl">
					<table>
						<caption>프로필 편집</caption>
						<tr>
							<th scope="row"><label htmlFor="eMail">이메일</label></th>
							<td colSpan="3"><input type="text" id="eMail" disabled="disabled" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="name">이름</label></th>
							<td colSpan="3"><input type="text" id="name" value="송예나" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="cellPh">휴대폰 번호</label></th>
							<td colSpan="3"><input type="text" id="cellPh" value="010-5002-5020" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="pCellPh">학부모 휴대폰 번호</label></th>
							<td colSpan="3"><input type="text" id="pCellPh" value="010-5002-5020" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="sch">재학중인 학교</label></th>
							<td><input type="text" id="sch" value="010-5002-5020" style="width:200px;" /></td>
							<th scope="row" className="wtype2"><label htmlFor="schN">학년</label></th>
							<td>
								<select id="schN" style="width:200px;">
									<option>1학년</option>
									<option>2학년</option>
									<option>3학년</option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="wSub">취약 과목</label></th>
							<td colSpan="3">
								<select id="wSub">
									<option>선택해주세요</option>
									<option>수학</option>
									<option>과학</option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="lev">최근 내신 등급</label></th>
							<td>
								<select id="">
									<option>선택해주세요.</option>
									<option>1등급</option>
									<option>2등급</option>
								</select>
							</td>
							<th scope="row"><label htmlFor="schN">최근 모의평가 등급</label></th>
							<td>
								<select id="schN" style="width:200px;">
									<option>선택해주세요.</option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="univ">목표대학/전공</label></th>
							<td colSpan="3"><input type="text" id="univ" placeholder="입력해주세요." /></td>
						</tr>
					</table>
				</div>
			</li>
		</>
	)
}

function ChangePassword() {
	return (
		<>
			<li className="selected">
				<a href="#" className="mym2">비밀번호 변경</a>
				<div className="in-tbl">
					<table className="type-pw">
						<caption>비밀번호 변경</caption>
						<tr>
							<th scope="row"><label htmlFor="pw">기존 비밀번호</label></th>
							<td>
								<input type="text" id="pw" />
								<button type="button" className="v-pw disb"><span>비밀번호 보기</span></button>
								<p className="err">비밀번호가 일치하지 않습니다.</p>
							</td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="nPw">신규 비밀번호</label></th>
							<td>
								<input type="text" id="nPw" />
								<button type="button" className="v-pw"><span>비밀번호 보기</span></button>
								<p className="err">비밀번호가 일치하지 않습니다.</p>
							</td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="nPwChk">신규 비밀번호 확인</label></th>
							<td>
								<input type="text" id="nPwChk" />
								<button type="button" className="v-pw disb"><span>비밀번호 보기</span></button>
								<p className="err">비밀번호가 일치하지 않습니다.</p>
							</td>
						</tr>
					</table>
				</div>
			</li>
		</>
	)
}

function Terms() {
	return (
		<>
			<li><a href="#" className="mym3">이용약관</a></li>
		</>
	)
}
function Policy() {
	return (
		<>
			<li><a href="#" className="mym4">개인정보처리방침</a></li>
		</>
	)
}

function Consent() {
	return (
		<>
			<li className="f-agree">
				<input type="checkbox" id="fAgree" />
				<label htmlFor="fAgree">입시, 신규 클래스 알림 등 정보 수신 및 활용 동의</label>
			</li>
		</>
	)
}

function Service() {
	return (
		<>
			<li><a href="#" className="mym5">고객센터</a></li>
		</>
	)

}
function Body() {
	return (
		<>
			<div className='myp-list'>
				<h2> 계정관리 </h2>
				<ul>
					{/* <EditProfile/> */}
					{/* <ChangePassword/> */}
					<Terms/>
					<Policy/>
					<Consent />
					<Service />
				</ul>
			</div>

		</>
	)
}

function DefProfile() {
	return (
		<>
			<div className='def-pf'>
				<span className="photo"><img src="images/@photo.png" alt="" /></span>
				<em>송예나</em>
				<input type="file" id="photoUp" /><label htmlFor="photoUp">사진업로드</label>
			</div>
		</>
	)

}

export function MyPage({ openProfile, setOpenProfile }) {
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
		<>
			<div className='dimd-layer'>
				<section className='def-layer'>
					<div className='tit-w'>
						<h1>마이페이지</h1>
					</div>
					<div className='mypage-w'>
						<div className='inner'>
							<DefProfile />
							<Body />
						</div>
						<div className="btn">
							<button type="button">취소</button>
							<button type="button" className="actv">저장</button>
							<button type="button" className="logout">로그아웃</button>
						</div>
					</div>
					<div className="btn-close">
						<button type="button"><span>팝업 닫기</span></button>
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