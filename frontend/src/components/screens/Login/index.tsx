import React, { useState } from 'react';
import Layout from '../../layouts/Login/index'
import axios, { AxiosResponse } from 'axios';

const Index = () => {

	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const login = () => {
		axios.post("http://localhost:4000/api/auth/signin", {
			email,
			password
		}).then((res: AxiosResponse) => {
			window.location.href = "http://localhost:3000/dashboard"
			// if (res.data === "success") {
			// 	window.location.href = "http://localhost:3000/dashboard"
			// 	console.log('Loged')
			// }
		}, () => {
			console.log("Failure");
		})
	}

	return (
		<Layout buttonText='Register'>
			<div className="login">
				<input type="text" placeholder='username' onChange={e => setEmail(e.target.value)} />
				<input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
				<button onClick={login}>Login</button>
			</div>
		</Layout>
	);
}

export default Index;
