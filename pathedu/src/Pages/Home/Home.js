import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet } from 'react-router-dom'
import { LeftTab } from "./LeftTab"
import Modal from 'react-modal';

export function MainModal({ open, setOpen }) {
	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
	}
	const myName = localStorage.getItem("accessToken")
	return (
		<>
			<Modal isOpen={open} ariaHideApp={false} name="modal">
				accessToken : {myName} <br />
				<input type="button" value="네 알겠어요!" onClick={modalOpen} name="x" /><br />
			</Modal>
		</>
	)
}


export function Home() {
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className='wrapper'>
				<div id="skipNav">
					<a href="#snContent">본문바로가기</a>
				</div>
				<hr />
				<div className="mobile-m">
					<button type="button"><span>메뉴열림</span></button>
					<div className="profile">
						<a href="aa"><span><img src="images/@photo.png" alt="프로필" /></span></a>
					</div>
				</div>
				<LeftTab />
				<hr />
				<Outlet />
				<MainModal open={open} setOpen={setOpen} />
			</div>
		</>
	);
}