import React, { Component } from 'react';
import Form from './Form';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { db } from '../firebase';
import Posts from './ExplorumPosts';
import Button from 'react-bootstrap/Button';

class Explorum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Errors: '',
			Posts_data: {},
			load: 'False',
			test: {
				goat: 'fat',
				fdsfsa: 'fdsfas',
				fdsafasfxcsfd: 'rtewtw',
			},
		};
	}

	Clean_string = (text) => {
		let obj = { "'": '', $: '', '{': '', '}': '', '(': '', ')': '', '`': '', '%': '', '@': '', '/': '' };
		let final = '';
		let bad_sign = false;
		[...text].map((each) => {
			bad_sign = false;
			for (const o in obj) {
				if (each === o) {
					bad_sign = true;
				}
			}
			if (bad_sign === false) {
				final += each;
			}
		});
		return final;
	};

	modify_time(date) {
		let front = date.slice(0, -6);
		let back = date.slice(date.length - 3, date.length);
		return front + back;
	}

	NewPost = (e) => {
		e.preventDefault();
		const Name = e.target.elements.Name.value;
		const City = e.target.elements.City.value;
		const Country = e.target.elements.Country.value;
		const Activity = e.target.elements.Activity.value;
		const Description = e.target.elements.Description.value;
		const Together = Name + City + Country + Description + Activity;
		if (Name !== '' && City !== '' && Country !== '' && Activity !== '' && Description !== '' && Together !== '') {
			let Time = this.modify_time(new Date().toLocaleTimeString());
			let Datee = new Date().toLocaleDateString();
			let Post_id = this.Clean_string(Name) + this.Clean_string(Time) + this.Clean_string(Datee);
			db.ref(`Explorum/${Post_id}`).set({
				Name: Name,
				City: City,
				Country: Country,
				Activity: Activity,
				Description: Description,
				Time: Time,
				Date: Datee,
			});
			this.setState({ Errors: '' });
			return <Link to="Forum"></Link>;
		} else {
			this.setState({ Errors: 'Please Fill In All The Avaliable Fields!' });
		}
	};

	componentDidMount() {
		let sto = {};
		let database = db.ref('Explorum');
		database.on('value', (snap) => {
			this.setState({
				Posts_data: snap.val(),
				load: 'True',
			});
		});
	}

	Show_Errors = () => {
		if (this.state.Errors !== '') {
			return <p style={{ color: 'red' }}>{this.state.Errors}</p>;
		} else {
			return null;
		}
	};

	render() {
		return (
			<React.Fragment>
				<Link to="/Weather">
					<Button style={{ fontSize: '20px', width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
						Check the Weather
					</Button>
				</Link>
				<div className="card" style={{ margin: 'auto', width: '55%', marginBottom: '.5%' }}>
					<div className="card-header" style={{ fontSize: '30px' }}>
						Explorum
					</div>
					<br></br>
					<Posts Posts_data={this.state.Posts_data} Load={this.state.load} />
					<br></br>
					<h3>Share Your Adventures</h3>
					<this.Show_Errors />
					<Form NewPost={this.NewPost} />
				</div>
			</React.Fragment>
		);
	}
}

export default Explorum;
