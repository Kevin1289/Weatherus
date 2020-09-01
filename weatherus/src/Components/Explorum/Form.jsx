// import React, { Component } from 'react';
// import './Form.css';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Form extends Component {
// 	state = {};
// 	render() {
// 		return (
// <form onSubmit={this.props.NEW_Post}>
// 	<input className="Form" type="text" name="Name" placeholder="Name" />
// 	<br></br>
// 	<br></br>
// 	<input className="Form" type="text" name="City" placeholder="City: New York, London" />
// 	<br></br>
// 	<br></br>
// 	<input className="Form" type="text" name="Country" placeholder="Country: US, UK, EU" />
// 	<br></br>
// 	<br></br>
// 	<input className="Form" type="text" name="Acitvity" placeholder="Activity: Hiking, Swimming" />
// 	<br></br>
// 	<br></br>
// 	{/* <textarea
// 		className="Form"
// 		type="text"
// 		name="Description"
// 		style={{ width: '80%' }}
// 		placeholder="Description"
// 	/> */}
// 	<br></br>
// 	<br></br>
// 	<input type="submit" value="Submit" />
// 	{/* <button className="Submit">Get Weather</button> */}
// </form>
// 		);
// 	}
// }

// export default Form;
import React, { Component } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
	state = {};
	clicked = (e) => {
		e.preventDefault();
		document.forms['Form_Form'].reset();
	};
	render() {
		return (
			<div>
				<br></br>
				<form onSubmit={this.props.NewPost} name="Form_Form">
					{/* <form onSubmit={this.clicked} name="Form_Form"> */}
					<input className="Form" type="text" name="Name" placeholder="Name" />
					<br></br>
					<br></br>
					<input className="Form" type="text" name="City" placeholder="City: New York, London" />
					<br></br>
					<br></br>
					<input className="Form" type="text" name="Country" placeholder="Country: US, UK, EU" />
					<br></br>
					<br></br>
					<input className="Form" type="text" name="Activity" placeholder="Activity: Hiking, Swimming" />
					<br></br>
					<br></br>
					<textarea
						className="Form"
						type="text"
						name="Description"
						style={{ width: '80%' }}
						placeholder="Description"
					/>
					<br></br>
					<br></br>
					<input type="submit" value="Submit" />
					{/* <button className="Submit">Get Weather</button> */}
				</form>
				<button onClick={this.clicked}>Reset</button>
			</div>
		);
	}
}

export default Form;
