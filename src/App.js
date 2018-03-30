import React, { Component } from "react";
import "./App.css";
import store from "./store";
import Modal from "react-modal";
import { changeProject } from "./actions/projectsActions";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false,
			mode: ""
		};
	}

	addProject = () => {
		store.dispatch(changeProject(null));
		this.setState(
			{
				mode: "Tryb dodawania"
			},
			() => {
				this.openModal();
			}
		);
	};

	editProject = () => {
		store.dispatch(changeProject(Math.floor(Math.random() * 100)));
		this.setState(
			{
				mode: "Tryb edycji"
			},
			() => {
				this.openModal();
			}
		);
	};

	openModal = () => {
		this.setState({ modalIsOpen: true });
	};

	afterOpenModal = () => {};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	render() {
		return (
			<div>
				<div className="button-container">
					<button onClick={this.addProject}>Add project</button>
					<button onClick={this.editProject}>Edit project</button>
				</div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Example Modal"
					className="Modal"
				>
					<header>
						<h2>Modal</h2>
						<h2>
							<code>{this.state.mode}</code>
						</h2>
						<span onClick={this.closeModal}>x</span>
					</header>
					{this.state.mode === "Tryb edycji" && (
						<div>
							<h3>
								Edycja projektu nr:<span>{store.getState().projectId}</span>
							</h3>
						</div>
					)}
				</Modal>
			</div>
		);
	}
}

export default App;
