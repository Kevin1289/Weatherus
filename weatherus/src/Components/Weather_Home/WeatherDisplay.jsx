import React from 'react';

const WeatherDisplay = (props) => {
	let {
		City,
		Country,
		Humidity,
		Pressure,
		Icon,
		Description,
		Simplified_des,
		Show,
		Curr_min_temp,
		Curr_max_temp,
		Wind_speed,
		Temp,
		X,
		Y,
	} = props.info;
	let Errors = props.Errors;
	if (Show === true) {
		// console.log('Show is True');
		if (Errors === '') {
			// console.log('Error is blank');
			try {
				return (
					<React.Fragment>
						{/* <h1>IN WeatherDisplay</h1> */}
						<h1>
							{City}, {Country} - {Temp}℉
						</h1>
						<img
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
							src={`http://openweathermap.org/img/wn/${Icon}.png`}
							width="50%"
							height="50%"
							alt="Weather Icon"
						></img>
						<h1>
							{Simplified_des} - {Description}
						</h1>
						<h1>
							Temperature Range: {Curr_min_temp}℉ - {Curr_max_temp}℉
						</h1>
						<h1>Humidity: {Humidity}</h1>
						<h1>Wind Speed: {Wind_speed} mph</h1>
						<h1>Pressure: {Pressure} hPa</h1>
						<h1>
							Coordinates: {X},{Y}
						</h1>
					</React.Fragment>
				);
			} catch (error) {
				return (
					<React.Fragment>
						{/* {console.log({ error })} */}
						<h1>Error! Please Double Check Your Entered Location.</h1>
					</React.Fragment>
				);
			}
		} else {
			// console.log('Error is not blank');
			return (
				<React.Fragment>
					{/* {console.log(Error)} */}
					<h1>{Errors}</h1>
				</React.Fragment>
			);
		}
	} else {
		// console.log('Show is False');
		return <h1>Please Enter a valid City and its Country</h1>;
	}
};

export default WeatherDisplay;
