import React, { Component } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
	state = {};
	render() {
		return (
			<form onSubmit={this.props.LoadWeather}>
				<input className="Form" type="text" name="City" placeholder="City ex: New York, London" />
				<br></br>
				<br></br>
				<input className="Form" type="text" name="Country" placeholder="Country ex: US, UK, EU" />
				<br></br>
				<br></br>
				<Button
					// onClick={(e) => e.preventDefault()}
					id="Main_map_button"
					type="submit"
					className="Submit"
					style={{ fontSize: '20px', width: '25%', marginLeft: 'auto', marginRight: 'auto' }}
				>
					Get Weather
				</Button>
				{/* <button className="Submit">Get Weather</button> */}
			</form>
		);
	}
}

export default Form;
