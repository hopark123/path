import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from "./Pages/Login/Login"
import { RegistPages } from "./Pages/Regist/Regist"
import { PasswordPage } from "./Pages/Password/Password"
import { Home } from "./Pages/Home/Home"
import { CoursePage, CoureseListList, CourseDetail } from "./Pages/Course"
import { QnaPage, QnaOneDetail, QnaAdd } from "./Pages/Qna"
import { ClassDayPage, TodoDetail } from "./Pages/Day";
import { ClassWeekPage } from "./Pages/Week";
import { NotiPage, NotiDetail } from "./Pages/Noti"

export default function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route path="/regist" element={<RegistPages />} />
			<Route path="/login" element={<Login />} />
			<Route path="/password" element={<PasswordPage />} />
			<Route path="/home" element={<Home />}>
				<Route path="day" element={<ClassDayPage />}/>
				<Route path="day/:id" element={<TodoDetail />}/>
				<Route path="week" element={<ClassWeekPage />}/>
				<Route path="noti" element={<NotiPage />}/>
				<Route path="noti/:id" element={<NotiDetail />}/>
				<Route path="course" element={<CoursePage />}/>
				<Route path="course/:id" element={<CoureseListList />}/>
				<Route path="course/:id/:courseid" element={<CourseDetail />}/>
				<Route path="qna" element={<QnaPage />}/>
				<Route path="qna/:id" element={<QnaOneDetail/>}/>
				<Route path="qna/add" element={<QnaAdd/>}/>
			</Route>
		</Routes>
	</BrowserRouter>
);
}