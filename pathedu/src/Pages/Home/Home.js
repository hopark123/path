import { useState } from 'react';
import { NavLink, Route, Link, Routes, Outlet } from 'react-router-dom'
import { LeftTab } from "./LeftTab"
import Modal from 'react-modal';


export function Home() {
	return (
		<>
			<div className='wrapper'>
				<div id="skipNav">
					<a href="#">본문바로가기</a>
				</div>
				<hr />
				<div className="mobile-m">
					<button type="button"><span>메뉴열림</span></button>
					<div className="profile">
						<a href="#"><span><img src="images/@photo.png" alt="프로필" /></span></a>
					</div>
				</div>
				<LeftTab />
				<hr />
				<Outlet />
				{/* <MainModal open={open} setOpen={setOpen} /> */}
			</div>
		</>
	);
}