import './style.css';
import React, { useState } from 'react';
import Layout from '../../layouts/Login/index'
import axios, { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Logo from '../../layouts/Public/Navbar/img/pngegg.png';
import swal from 'sweetalert';


const Index = () => {

	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const error = () => swal("User invalid!", "Try again or Register Now!!!");



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
			error()

		})
	}

	return (
		<Layout buttonText='Register'>
			<div className="login">
				<img src={Logo} className="logoNavbar" />
				<div className="loginForm">
					<TextField id="outlined-basic"
						variant="outlined"
						placeholder='Username'
						onChange={e => setEmail(e.target.value)}
						fullWidth
					/>
					<TextField id="outlined-basic"
						variant="outlined"
						type="password"
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
						fullWidth
					/>
					<Button variant="contained" color="primary" onClick={login}>
						Login
      				</Button>
				</div>
			</div>
		</Layout>
	);
}

export default Index;
