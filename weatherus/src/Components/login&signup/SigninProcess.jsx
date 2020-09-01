import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import LoginSignup from './Login_Signup';
import firebaseConfig from './firebase';

// import firebase from './firebase';
// import Login from './Authentication/Log_in';
// import { auth, db } from 'firebase';
// import Colleges from './college_js/Colleges';
// import Home from './college_js/Home';

class SigninProcess extends Component {
	constructor(props) {
		super(props);
		// Read Data From Firebase
		// let app = firebase.initializeApp(firebaseConfig);
		// let database = app.database().ref().child(`speeds/speed`);
		// console.log('Database1:', database);
		// database.on('value', (snapshot) => {
		// 	console.log('Database2:', snapshot.val());
		// 	// data = snapshot.val();
		// });
		//Make data in firebase

		// console.log('Database2:', data);
		this.state = {
			user: 'Default',
		};
		this._isMounted = false;
	}

	componentDidMount() {
		this._isMounted = true;
		this._isMounted && this.authListener();
	}

	authListener = async () => {
		await firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this._isMounted && this.setState({ user });
				console.log(user);

				// localStorage.setItem('user', user.uid);
			} else {
				this._isMounted && this.setState({ user: null });
				console.log('NULL');

				// localStorage.removeItem('user');
			}
		});
	};

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		// var database = firebase.database();
		// if (!firebase.apps.length) {
		// 	let app = firebase.initializeApp(firebaseConfig);
		// 	let database = app.database().ref().child('speed');
		// 	console.log('Database:', database);
		// } else {
		// 	console.log('FAILEDDDD');
		// }
		// }
		// console.log(db.ref.child('speed'));

		return (
			<React.Fragment>
				{/* <h1>{this.state.user.email}</h1> */}
				{/* {console.log('Log in Stat: ', this.state.user)} */}
				{/* <div>{this.state.user != {} ? <this.User_acc_init /> : <Login />}</div> */}
				{/* <div>{this.state.user === {} ? console.log('YESSS') : console.log('NOOOOO')}</div> */}
				<div>
					{this.state.user === 'Default' ? (
						<p>Loading...</p>
					) : this.state.user ? (
						//(console.log('From database', this.state.user.email, 'BREAKKKK', {
						/* firebase.database().ref('speed') */
						//}),
						//(<h1>Logged IN As {this.state.user.email}</h1>))
						<Redirect to="/" />
					) : (
						<LoginSignup />
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default SigninProcess;
