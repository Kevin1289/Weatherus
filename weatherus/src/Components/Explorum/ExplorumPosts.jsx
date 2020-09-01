import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends Component {
	state = {};
	MAP = () => {
		if (this.props.Load === 'True') {
			let sto = this.props.Posts_data;
			if (this.props.Posts_data !== {}) {
				return Object.keys(sto).map((item, i) => {
					return (
						<div
							class="card "
							style={{
								alignItems: 'center',
								border: 'none',
							}}
							key={sto[item]}
						>
							<br></br>
							<div
								class="card-body"
								style={{
									textAlign: 'left',
									width: '70%',
									border: '3px solid red',
								}}
							>
								<h1>{sto[item].Activity}</h1>
								<p>
									By: {sto[item].Name} <br></br>
									{sto[item].Date} {sto[item].Time}
								</p>
								<hr></hr>
								<p>
									Location: {sto[item].City}, {sto[item].Country}
								</p>
								<h5>Description: {sto[item].Description}</h5>
							</div>
							<br></br>
						</div>
					);
				});
			} else {
				return <h1>Be The First To Share</h1>;
			}
		} else {
			return <h1>Loading...</h1>;
		}
	};
	render() {
		return (
			<div>
				<h3>Recommended By Fellow Explorers</h3>
				<br></br>
				<div className="outside_Others_data">
					<div className="Others_data">
						<this.MAP />
					</div>
				</div>
			</div>
		);
	}
}

export default Posts;
