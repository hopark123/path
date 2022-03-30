import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from "./Pages/Login/Login"
import { RegistPages } from "./Pages/Regist/Regist"
import { PasswordPage } from "./Pages/Password/Password"

import { Home } from "./Pages/Home/Home"
import { CoursePage } from "./Pages/Course/Course"
import { CoureseListList } from "./Pages/Course/CourseList"
import { CourseDetail } from "./Pages/Course/CourseDetail"
import { QnaPage } from "./Pages/Qna/Qna"
import { QnaOneDetail } from "./Pages/Qna/QnaOneDetail"
import { QnaAdd} from "./Pages/Qna/QnaAdd"
import { ClassDayPage } from "./Pages/Day/ClassDay";
import { TodoDetail } from "./Pages/Day/TodoDetail"
import { ClassWeekPage } from "./Pages/Week/ClassWeek";
import { NotiPage } from "./Pages/Noti/NotiPage"
import { NotiDetail } from "./Pages/Noti/NotiDetail";
export default function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route path="/regist" element={<RegistPages />} />
			<Route path="/login" element={<Login />} />
			<Route path="/password" element={<PasswordPage />} />
			<Route path="/home" element={<Home />}>
				<Route path="day" element={<ClassDayPage />}>
					<Route path=":id" element={<TodoDetail />}/>
				</Route>
				<Route path="week" element={<ClassWeekPage />}/>
				<Route path="noti" element={<NotiPage />}>
					<Route path=":id" element={<NotiDetail />}/>
				</Route>
				<Route path="course" element={<CoursePage />}>
					<Route path=":courseid" element={<CoureseListList />}>
					</Route>
				</Route>
				<Route path="qna" element={<QnaPage />}/>
					<Route path="/home/qna/add" element={<QnaAdd/>}/>
					<Route path=":id" element={<QnaOneDetail />}/>
				<Route/>
			</Route>
		</Routes>
	</BrowserRouter>
);
}