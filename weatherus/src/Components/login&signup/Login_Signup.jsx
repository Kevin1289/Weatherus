import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/database';
// import firebaseConfig from './firebase';

class LoginSignup extends Component {
	constructor(props) {
		super(props);
		// this.login = this.login.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		this.state = {
			email: '',
			password: '',
			Colleges: [
				{ Name: 'NYU', SAT: '1490', Loc: 'NY', Fav_stat: 'False' },
				{ Name: 'Stony', SAT: '1390', Loc: 'NY', Fav_stat: 'False' },
				{ Name: 'UMich', SAT: '1390', Loc: 'NY', Fav_stat: 'False' },
				{ Name: 'Kevin University', SAT: '1390', Loc: 'NY', Fav_stat: 'False' },
				{ Name: 'Best School Ever', SAT: '1390', Loc: 'NY', Fav_stat: 'False' },
				{ Name: 'CS School', SAT: '1390', Loc: 'NY', Fav_stat: 'False' },
			],
		};
	}

	handelChange = (e) => {
		// console.log('CHANGEDDDDDDDDD');
		this.setState({ [e.target.name]: e.target.value });
	};

	login = (e) => {
		console.log('Logging in with ', this.state.email, this.state.password);
		e.preventDefault();
		// let firebase =
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch((error) => {
				console.log(error);
			});
	};

	SignUp = (e) => {
		console.log('Signing up with ', this.state.email, this.state.password);
		e.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.catch((error) => {
				console.log(error);
			});
		//NEW
		const uid = this.state.email;
		let new_Uid = '';
		for (let i = 0; i < uid.length; i++) {
			if (uid[i] in { '.': 1, '#': 1, $: 1, '[': 1, ']': 1 }) {
			} else {
				new_Uid = new_Uid.concat(uid[i]);
			}
		}
		console.log(new_Uid);
		firebase.database().ref(`Weatherman_users/${new_Uid}`).set({
			Has_List: 'Yes',
		});
		// this.User_acc_init();
	};

	User_acc_init = () => {
		console.log('calling User_acc_init');
		const uid = this.state.email;
		let new_Uid = '';
		for (let i = 0; i < uid.length; i++) {
			if (uid[i] in { '.': 1, '#': 1, $: 1, '[': 1, ']': 1 }) {
			} else {
				new_Uid = new_Uid.concat(uid[i]);
			}
		}
		console.log(new_Uid);
		firebase.database().ref(`College_users/${new_Uid}/${'College_Lists'}`).set({
			Colleges: this.state.Colleges,
		});

		// console.log('uID:', uid);
		return;
	};

	render() {
		// console.log('IN LOG IN');
		return (
			<div>
				<form>
					<div className="form-group">
						Email Adress:
						<input
							value={this.state.email}
							// autoComplete="off"
							// autoFocus
							onChange={(e) => this.setState({ email: e.target.value })}
							// onChange={this.handleChange}
							type="email"
							name="email"
							id="exampleInputEmail"
							placeholder="Enter Email"
							aria-describedby="emailHelp"
						></input>
						<br></br>
					</div>

					<div className="form-group">
						Password:
						<input
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}
							// onChange={this.handleChange}
							type="password"
							name="password"
							id="exampleInputPassword"
							placeholder="Password"
						></input>
						<br></br>
						{/* <input placeholder="TESTTT" onChange={this.handleChange}></input> */}
						<button type="submit" onClick={this.login}>
							Log In
						</button>
						<br></br>
						<button type="submit" onClick={this.SignUp}>
							Don't have and account? Sign up here!
						</button>
						<br></br>
					</div>
				</form>
			</div>
		);
	}
}
export default LoginSignup;
