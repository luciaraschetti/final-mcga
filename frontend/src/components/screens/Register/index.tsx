import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Layout from '../../layouts/Login/index';

const Index = () => {
	const [email, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")


	const register = () => {
		axios.post("http://localhost:4000/api/auth/signup", {
			email,
			password
		}, {
			withCredentials: true
		}).then((res: AxiosResponse) => {
			if (res.data === "success") {
				window.location.href = "/login"
			}
		})
	}

	return (
		<Layout buttonText='Login'>
			<input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
			<input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
			<button onClick={register}>Login</button>
		</Layout>
	);
}

export default Index;
