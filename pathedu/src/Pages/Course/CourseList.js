import coursedetail  from "../../Data/coursedetail.json"
import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'


function CourseListDetailcourse(props) {
	const name = props.course.title
	const day = props.course.updatedAt
	return (
		<>
			<Link to = {{pathname : `${props.course.id}`
				}}>
				<img src={`/images/강의 1.png`} width="44" height="44"/>
			</Link>
			<div> {name} </div>
			<div> {day}</div>
			<br/>
			<br/>
		</>
	)

}

export function CoureseListList(props) {
	const courses = coursedetail.resultData.lectures
	const [open, setOpen] = useState(true);
	const [detail, setDetail] = useState();

	const navigate = useNavigate();

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/course");
	}
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
			{ courses &&	courses.map((item) => {
				return (<CourseListDetailcourse course={item} key={item.id} setDetail={setDetail} detail={detail}/>)})}
		</Modal>
		</>
	)
}