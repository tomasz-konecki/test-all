import React, { Component } from "react";
import "./App.css";
// import _ from "lodash";

class App extends Component {
	constructor() {
		super();
		this.state = {
			project: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: ""
			},
			style: ""
		};
	}

	handleChange = (e) => {
		let field = e.target.name;
		let object = {};
		object[field] = e.target.value;

		// let newObject = Object.assign({}, this.state.project, object);
		this.setState({
			// project: newObject
			project: {
				...this.state.project,
				...object
			}
		});
	};

	validation = (e) => {
		const patterns = {
			firstName: /^[A-Za-z]+$/,
			lastName: /^[A-Za-z\\s-]+$/,
			email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
			phoneNumber: /^\d{9,11}$/
		};

		let regex = patterns[e.target.name];
		let value = e.target.value;
		let style = "";

		regex.test(value) ? (style = "valid") : (style = "invalid");

		this.setState({
			style
		});
	};

	render() {
		return (
			<div className="app-container">
				<code>
					<h2>...Regular expressions</h2>
					<ul>
						<li>{this.state.project.firstName}</li>
						<li>{this.state.project.lastName}</li>
						<li>{this.state.project.email}</li>
						<li>{this.state.project.phoneNumber}</li>
					</ul>
				</code>
				<hr />
				<div className="form-container">
					<code>
						<div className="form-item">
							<label>Imię:</label>
							<input type="text" name="firstName" onChange={this.handleChange} onKeyUp={this.validation} />
						</div>
						{/* {this.state.flag === false && <p>Znaki specjalne nie są dozwolone</p>} */}
						<p className={this.state.style}>Znaki specjalne nie są dozwolone</p>
						<div className="form-item">
							<label>Nazwisko:</label>
							<input type="text" name="lastName" onChange={this.handleChange} onKeyUp={this.validation} />
						</div>
						<div className="form-item">
							<label>Email:</label>
							<input type="text" name="email" onChange={this.handleChange} onKeyUp={this.validation} />
						</div>
						<div className="form-item">
							<label>Telefon:</label>
							<input
								type="text"
								name="phoneNumber"
								onChange={this.handleChange}
								onKeyUp={this.validation}
								maxLength="11"
							/>
						</div>
						<div className="submit-container">
							<button onClick={this.onSubmit}>
								<code>Submit</code>
							</button>
						</div>
					</code>
				</div>
			</div>
		);
	}
}

export default App;
