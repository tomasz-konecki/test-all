import React, { Component } from "react";
import "./App.css";
import _ from "lodash";

class App extends Component {
	constructor() {
		super();
		this.state = {
			project: {
				name: "Lemon",
				client: "Curry",
				startDate: 23032018,
				endDate: 31122018
			}
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

	onSubmit = () => {
		this.state.project.startDate > this.state.project.endDate
			? alert("Data początkowa większa od koncowej!")
			: console.table(this.state.project);
	};

	render() {
		return (
			<div className="app-container">
				<code>
					<h2>...State spread</h2>
					<ul>
						<li>{this.state.project.name}</li>
						<li>{this.state.project.client}</li>
						<li>{this.state.project.startDate}</li>
						<li>{this.state.project.endDate}</li>
					</ul>
				</code>
				<hr />
				<div className="date-input-container">
					<code>
						<div className="date-item">
							<label>Start date:</label>
							<input type="text" name="startDate" onChange={this.handleChange} />
						</div>
						<div className="date-item">
							<label>End date:</label>
							<input type="text" name="endDate" onChange={this.handleChange} />
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
