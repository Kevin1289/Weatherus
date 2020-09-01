import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import WeatherDisplay from './WeatherDisplay';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

class WeatherHome extends Component {
	constructor(props) {
		// console.log('C?ONSTRUCTORRRR');
		super(props);
		this.state = {
			// SignedIn: 'Loading',
			database: this.props.database,
			api_key: 'b337f3f4ac21bd71f328fe87749ffce5',
			stat: {
				City: '',
				Country: '',
				Humidity: '',
				Pressure: '',
				Icon: '',
				Description: '',
				Simplified_des: '',
				Curr_min_temp: '',
				Curr_max_temp: '',
				Wind_speed: '',
				X: '',
				Y: '',
				Show: false,
				// Errors: '',
			},
			Errors: '',
			Data: {},
		};
	}

	SetError = () => {
		this.setState({
			Errors: 'Please Enter a valid City and its Country',
		});
	};

	LoadWeather = async (e) => {
		e.preventDefault();
		const City = e.target.elements.City.value;
		const Country = e.target.elements.Country.value;
		const api_key = this.state.api_key;
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=imperial&appid=${api_key}`
		);
		const Call_return = await api_call.json();
		console.log('after API', Call_return, 'COD:', Call_return.cod);
		if (City && Country) {
			// console.log('IN City and Country');
			if (Call_return.cod === 200) {
				// console.log('PERFECTTT');
				try {
					this.setState({
						stat: {
							City: Call_return.name,
							Temp: Call_return.main.temp,
							Country: Call_return.sys.country,
							Humidity: Call_return.main.humidity,
							Pressure: Call_return.main.pressure,
							Icon: Call_return.weather[0].icon,
							Description: Call_return.weather[0].description,
							Simplified_des: Call_return.weather[0].main,
							Curr_min_temp: Call_return.main.temp_min,
							Curr_max_temp: Call_return.main.temp_max,
							Wind_speed: Call_return.wind.speed,
							X: Call_return.coord.lon,
							Y: Call_return.coord.lat,
							Show: true,
							// Errors: '',
						},
						Errors: '',
						// Data: { Data: Call_return },
					});
				} catch (error) {
					// let Errors = this.state.Errors;
					// Errors.push(error);
					this.SetError();
				}
			} else {
				this.SetError();
			}
		} else {
			this.SetError();
		}

		console.log('stat', this.state.stat);
	};

	Show_Weather = () => {
		return (
			<div className="card" style={{ margin: 'auto', width: '55%', marginBottom: '.5%' }}>
				<div className="card-header" style={{ fontSize: '30px' }}>
					Welcome to Weatherus!
				</div>
				<Header />
				<Form LoadWeather={this.LoadWeather} />
				<br></br>
				<hr
					style={{
						width: '70%',
						marginLeft: 'auto',
						marginRight: 'auto',
						componentAlign: 'center',
						height: '4px',
						backgroundColor: 'red',
					}}
				></hr>
				<WeatherDisplay info={this.state.stat} Errors={this.state.Errors} />
				<br></br>
			</div>
		);
	};

	render() {
		return (
			<React.Fragment>
				<Link to="/Forum">
					<Button style={{ fontSize: '20px', width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
						See What Your Fellow Explorers Are Up To
					</Button>
				</Link>
				<this.Show_Weather />
			</React.Fragment>
		);
	}
}

export default WeatherHome;
