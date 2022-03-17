// const EMAIL = 'FormReducer/EMAIL';
// const PASSWORD = 'FormReducer/PASSWORD';
// const CONFIRMPASSWORD = 'FormReducer/CONFIRMPASSWORD';
// const NAME= 'FormReducer/NAME';
// const PHONE= 'FormReducer/PHONE';
// const PARENTPHONE= 'FormReducer/PARENTPHONE';
// const NOWSCHOOL= 'FormReducer/NOWSCHOOL';
// const YEAR= 'FormReducer/YEAR';
// const weak= 'FormReducer/weak';
// const schoolGrade= 'FormReducer/schoolGrade';
// const satGrade= 'FormReducer/satGrade';
// const DESTSCHOOL= 'FormReducer/DESTSCHOOL';
const FORM = "FormReducer/reduxForm"



// export const setEmail = email => ({ type: EMAIL, email });
// export const setPassword = password => ({ type: PASSWORD, password });
// export const setConfirmPassword = confirmPassword => ({ type: CONFIRMPASSWORD, confirmPassword });
// export const setname = name => ({ type: NAME, name });
// export const setphone = phone => ({ type: PHONE, phone });
// export const setparentPhone = parentPhone => ({ type: PARENTPHONE, parentPhone });
// export const setnowSchool = nowSchool => ({ type: NOWSCHOOL, nowSchool });
// export const setyear = year => ({ type: YEAR, year });
// export const setweak = weak => ({ type: weak, weak });
// export const setschoolGrade = schoolGrade => ({ type: schoolGrade, schoolGrade });
// export const setsatGrade = satGrade => ({ type: satGrade, satGrade });
// export const setdestSchool = destSchool => ({ type: DESTSCHOOL, destSchool });

export const reduxForm = (form) => (
	{
		type : FORM,
		form : form
	}
)


export const ReductNewSave = (form) => (
	{
		type: FORM,
		form
	}
	// console.log('saveData :: ', saveData)
)

const initialState = {
	form : '',
};

export default function FormReducer(state = initialState, action) {
	switch(action.type) {
		// case EMAIL:
		// 	return { ...state, EMAIL:action.EMAIL }
		// case PASSWORD:
		// 		return { ...state, PASSWORD:action.PASSWORD }
		// case CONFIRMPASSWORD:
		// 	return { ...state, CONFIRMPASSWORD:action.CONFIRMPASSWORD }
		// case NAME:
		// 	return { ...state, NAME:action.NAME }
		// case PHONE:
		// 	return { ...state, PHONE:action.PHONE }
		// case PARENTPHONE:
		// 	return { ...state, PARENTPHONE:action.PARENTPHONE }
		// case NOWSCHOOL:
		// 	return { ...state, NOWSCHOOL:action.NOWSCHOOL }
		// case YEAR:
		// 	return { ...state, YEAR:action.YEAR }
		// case weak:
		// 	return { ...state, weak:action.weak }
		// case schoolGrade:
		// 	return { ...state, schoolGrade:action.schoolGrade }
		// case satGrade:
		// 	return { ...state, satGrade:action.satGrade }
		// case DESTSCHOOL:
		// 	return { ...state, DESTSCHOOL:action.DESTSCHOOL }
		case FORM:
			return { ...state, form:action.form }
		default	: {
			return state;
		}
	}
}