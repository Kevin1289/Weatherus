import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherMaps extends Component {
	state = {
		Show_options: false,
		Chosen_map: 'None',
	};

	Show_options = (e) => {
		e.preventDefault();
		// document.getElementById('Main_map_button').innerHTML = 'Paragraph changed!';
		// console.log('Button Clicked:', e.target.innerHTML);
		if (e.target.innerHTML === 'View a variety of 15 Weather Maps') {
			document.getElementById('Main_map_button').innerHTML = 'Click to Hide Maps';
			this.setState({ Show_options: true });
		} else if (e.target.innerHTML === 'Click to Hide Maps') {
			document.getElementById('Main_map_button').innerHTML = 'View a variety of 15 Weather Maps';
			this.setState({ Show_options: false });
		}
	};
	render() {
		return (
			<div>
				<br></br>
				<Button
					id="Main_map_button"
					onClick={this.Show_options}
					variant="outline-info"
					style={{ fontSize: '20px', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}
				>
					View a variety of 15 Weather Maps
				</Button>
			</div>
		);
	}
}

export default WeatherMaps;
