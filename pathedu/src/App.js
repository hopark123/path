import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { SignPages } from "./Pages/Sign"
import { Password, PasswordReset } from "./Pages/Password"

export default function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<SignPages />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/password" element={<PasswordReset />} />
			<Route path="/password/reset" element={<PasswordReset />} />
			<Route path="/Home" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
}
