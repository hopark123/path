import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, ClassWeekPage, NotificationPage, ClassDayPage, QnaPage,  } from "./Pages/Home"
import { CoursePage, VodListDetailList } from "./Pages/Course"
import { Login } from "./Pages/Login"
import { RegistPages } from "./Pages/Regist"
import { Password, PasswordReset } from "./Pages/Password"


export default function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route path="/regist" element={<RegistPages />} />
			<Route path="/login" element={<Login />} />
			<Route path="/password" element={<PasswordReset />} />
			<Route path="/password/reset" element={<PasswordReset />} />
			<Route path="/home" element={<Home />}>
				<Route path="day" element={<ClassDayPage />} />
				<Route path="week" element={<ClassWeekPage />}/>
				<Route path="noti" element={<NotificationPage />}/>
				<Route path="course" element={<CoursePage />}/>
				<Route path="course/:courseid" element={<VodListDetailList />}/>
				<Route path="qna" element={<QnaPage />}/>
			</Route>
		</Routes>
	</BrowserRouter>
);
}