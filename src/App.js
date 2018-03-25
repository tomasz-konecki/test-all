import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			age: 0
		};
	}

	onSubmit = () => {
		this.setState({
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			age: this.age.value
		});
		// console.log(this.firstName.value, this.lastName.value, this.age.value);
	};

	render() {
		console.table(this.state);
		return (
			<div>
				<div>
					<label>First name</label>
					<input type="text" ref={(input) => (this.firstName = input)} onKeyUp={this.handleKeyUp} />
				</div>
				<div>
					<label>Last name</label>
					<input type="text" ref={(input) => (this.lastName = input)} />
				</div>
				<div>
					<label>Age</label>
					<input type="text" ref={(input) => (this.age = input)} />
				</div>
				<div>
					<button onClick={this.onSubmit}>Submit</button>
				</div>
			</div>
		);
	}
}

export default App;
