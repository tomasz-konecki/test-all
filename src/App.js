import React, { Component } from "react";
import "./App.css";
import _ from "lodash";

class App extends Component {
	constructor() {
		super();
		this.state = {
			array: [
				{ firstName: "Neil", middleName: "Francis", surname: "Tennant" },
				{ firstName: "Chris", middleName: "Sean", surname: "Lowe" }
			]
		};
	}
	render() {
		console.log(_.map(this.state.array, "surname"));
		return (
			<div>
				<code>
					<h2>Loadash</h2>
				</code>
			</div>
		);
	}
}

export default App;
