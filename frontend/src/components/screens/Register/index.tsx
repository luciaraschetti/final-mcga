import './style.css';
import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Layout from '../../layouts/Login/index';
import Logo from '../../layouts/Public/Navbar/img/clipboard.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';


const Index = () => {
	const [email, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [repeatPassword, setRPassword] = useState<string>("")

	const success = () => swal("Congrats", "You redirect to Login", "success")

	const register = () => {
		axios.post("http://localhost:4000/api/auth/signup", {
			email,
			password
		}).then((res: AxiosResponse) => {
			console.log('Good')
		}, () => {
			console.log("Failure");
			// error()
		})

	}

	const checkNewUser = () => {
		if (password.length < 6 || repeatPassword.length < 6) {
			swal("Validation", "Length must be at least 6 characters long", "error")
		}
		else if (password === repeatPassword) {
			register()
			success()
			setTimeout(function () { window.location.href = "/login" }, 2000);
		}
		else if (password !== repeatPassword) {
			swal("Validation", "Passwords must match", "error")
			return false;
		}

	}

	return (
		<Layout buttonText='Login'>
			<div className="register">
				<h1>Register new user for eSports Platform</h1>
				<img src={Logo} className="logoNavbar" />
				<div className="registerForm">
					<TextField id="outlined-basic"
						variant="outlined"
						placeholder='Username'
						onChange={e => setUsername(e.target.value)}
						fullWidth
					/>
					<TextField id="outlined-basic"
						variant="outlined"
						type="password"
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
						fullWidth
					/>
					<TextField id="outlined-basic"
						variant="outlined"
						type="password"
						placeholder='Repeat Password'
						onChange={e => setRPassword(e.target.value)}
						fullWidth
					/>
					<Button variant="contained" color="primary" onClick={checkNewUser}>
						Register
      				</Button>
				</div>
			</div>
		</Layout>
	);
}

export default Index;
