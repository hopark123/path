import { Outlet } from "react-router-dom"
import coursedetail  from "../Data/coursedetail.json"
import Modal from 'react-modal';
import { useState } from 'react';

function CourseListDetailcourse(props) {
	const name = props.course.title
	const day = props.course.updatedAt
	return (
		<>
			<div>Images</div>
			<div> {name} </div>
			<div> {day}</div>
			<br/>
			<br/>
		</>
	)

}

//강좌 인증, 받아오는거 만들어줘야함
export function CourseListDetailList(props) {
	const courses = coursedetail.resultData.lectures
	const [open, setOpen] = useState(true)

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
	}
	return (
		<>
		<Outlet/>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
			{ courses &&	courses.map((item) => {
				return (<CourseListDetailcourse course={item} key={item.id}/>)})}
		</Modal>
		</>
	)
}