import React, { Component } from 'react';
import WeatherHome from './Components/Weather_Home/Weather_Home_Body';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, useParams, Routes } from 'react-router-dom';

import Explorum from './Components/Explorum/Explorum_Body';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firebase: '',
			redirect: false,
		};
	}

	render() {
		return (
			<div>
				<p style={{ color: '#FC9800', fontSize: '80px' }}>
					<img src="LOGO.png" style={{ width: '7vw', height: '7vw' }} alt="Logo" />
					<t style={{ marginLeft: '2%' }}>
						<b>
							<u>Weatherus</u>
						</b>
					</t>
				</p>
				<br></br>
				<Router>
					<Switch>
						<Route exact path="/">
							<WeatherHome database={this.state.firebaset} />
						</Route>
						<Route path="/Weather">
							<WeatherHome database={this.state.firebase} />
						</Route>
						<Route path="/Forum">
							<Explorum database={this.state.firebase} />
						</Route>
					</Switch>
				</Router>
				<footer style={{ margin: 'auto', marginBottom: '.5%' }}>Ⓒ 2020 Shi Xin (Kevin) Wu</footer>
			</div>
		);
	}
}

export default App;
