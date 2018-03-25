import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { albumReleased } from "./actions/albumsActions";

class App extends Component {
	constructor() {
		super();
		this.state = {
			album: "",
			done: false
		};
	}

	handleChange = (e) => {
		this.setState({
			album: e.target.value
		});
	};

	onSubmit = () => {
		this.setState({
			done: true
		});
		store.dispatch(albumReleased(this.state.album));
	};

	handleKeyUp = (e) => {
		if (e.keyCode === 13) this.onSubmit();
	};

	getAlbums = () => {
		return store.getState().albums.map((album, index) => <li key="index">{album}</li>);
	};

	render() {
		return (
			<div>
				<h2>PSB ALBUMS</h2>
				<ul>{this.getAlbums()}</ul>
				<hr />
				<code>Enter album name:</code>
				<input type="text" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
				<button onClick={this.onSubmit}>Submit</button>
				<hr />
				{this.state.done === true && (
					<code>
						You entered:<span>
							<b>{this.state.album}</b>
						</span>
					</code>
				)}
			</div>
		);
	}
}

export default App;
