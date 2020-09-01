import React, { Component } from 'react';

class Header extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<br></br>
				<h1 style={{ fontSize: '20px' }}>Let us Weather You</h1>
				<br></br>
				{/* <h1>Welcome to Weather Man</h1> */}
			</React.Fragment>
		);
	}
}

export default Header;
