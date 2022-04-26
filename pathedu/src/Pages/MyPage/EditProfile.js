import { useState } from 'react';


export function EditProfile(props) {
	const [select, SetSelect] = useState('')
	const {profile, makeProfile} = props
	const onSelect = (e) => {
		e.preventDefault();
		if (select == '')
			SetSelect('selected');
		else
			SetSelect('');
	}
	return (
		<>
			<li className={select}>
				<a href="#" className="mym1" onClick={onSelect}>프로필 편집</a>
				<div className="in-tbl">
					<table>
						<caption>프로필 편집</caption>
						<tbody>
							<tr>
								<th scope="row"><label htmlFor="eMail">이메일</label></th>
								<td colSpan="3"><input type="text" id="eMail" name="eMail" disabled="disabled" defaultValue={profile.eMail} onChange={makeProfile}/></td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="name">이름</label></th>
								<td colSpan="3"><input type="text" id="name" name="name" defaultValue={profile.name} onChange={makeProfile}/></td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="cellPh">휴대폰 번호</label></th>
								<td colSpan="3"><input type="text" id="cellPh" name="phone" defaultValue={profile.phone} onChange={makeProfile}/></td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="pCellPh">학부모 휴대폰 번호</label></th>
								<td colSpan="3"><input type="text" id="pCellPh" name="paretPhone" defaultValue={profile.parentPhone} onChange={makeProfile} /></td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="sch">재학중인 학교</label></th>
								<td><input type="text" id="sch" defaultValue={profile.nowSchool} style={{ width: "200px" }} name="year" onChange={makeProfile}/></td>
								<th scope="row" className="wtype2"><label htmlFor="schN">학년</label></th>
								<td>
									<select id="schN" style={{ width: "200px" }} onChange={makeProfile} defaultValue={profile.year}>
										{profile.year != "1학년" && (<option>1학년</option>)}
										{profile.year != "2학년" && (<option>2학년</option>)}
										{profile.year != "3학년" && (<option>3학년</option>)}
									</select>
								</td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="wSub">취약 과목</label></th>
								<td colSpan="3">
									<select id="wSub" name="weak" onChange={makeProfile} defaultValue={profile.weak}>
										<option>선택해주세요</option>
										{profile.weak != "수학" && (<option>수학</option>)}
										{profile.weak != "과학" && (<option>과학</option>)}
									</select>
								</td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="lev">최근 내신 등급</label></th>
								<td>
									<select id="" name="schoolGrade" onChange={makeProfile}>
										<option>선택해주세요.</option>
										{profile.schoolGrade === "1등급" && (<option selected>1등급</option>)}
										{profile.schoolGrade != "1등급" && (<option>1등급</option>)}
										{profile.schoolGrade === "2등급" && (<option selected>2등급</option>)}
										{profile.schoolGrade != "2등급" && (<option>2등급</option>)}
									</select>
								</td>
								<th scope="row"><label htmlFor="schN">최근 모의평가 등급</label></th>
								<td>
									<select id="schN" style={{ width: "200px" }} name="satGrade" onChange={makeProfile}>
										<option>선택해주세요.</option>
										{profile.satGrade === "1등급" && (<option selected>1등급</option>)}
										{profile.satGrade != "1등급" && (<option>1등급</option>)}
										{profile.satGrade === "2등급" && (<option selected>2등급</option>)}
										{profile.satGrade != "2등급" && (<option>2등급</option>)}
									</select>
								</td>
							</tr>
							<tr>
								<th scope="row"><label htmlFor="univ">목표대학/전공</label></th>
								{profile.destSchool == "" && (<td colSpan="3"><input type="text" id="univ" placeholder='입력해주세요' name="destSchool" onChange={makeProfile}/></td>)}
								{profile.destSchool && (<td colSpan="3"><input type="text" id="univ" defaultValue={profile.destSchool} name="destSchool" onChange={makeProfile}/></td>)}
							</tr>
						</tbody>
						
					</table>
				</div>
			</li>
		</>
	)
}