import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet} from 'react-router-dom'
import {LeftTab} from "./LeftTab"
import Modal from 'react-modal';
import { ClassDayPage } from '../Day/ClassDay';

export function MainModal({open, setOpen}) {
	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
	}
	const myName = localStorage.getItem("accessToken")
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			accessToken : {myName} <br/>
			<input type="button" value="네 알겠어요!" onClick={modalOpen} name="x"/><br/>
		</Modal>
		</>
	)
}


export function Home() {
	const [open, setOpen] = useState(false)
	// console.log(localStorage)
	return (
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<div >
		<LeftTab/> <br/>
		</div>
		<div>
			@월 @일
			<Link to="day">
				<input type="button" name="일" value="일" />
			</Link>
			<Link to="week">
				<input type="button" name="주" value="주" /><br/>
			</Link>
			-----------<br/>
			<Outlet/><br/>
			-----------<br/>
		</div>
		<MainModal open={open} setOpen={setOpen}/>
	</div>
	);
}