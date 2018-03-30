import { CHANGE_PROJECT } from "./../constants";

const initialState = {
	projectId: null
};

export const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PROJECT:
			return {
				...state,
				projectId: action.projectId
			};
		default:
			return state;
	}
};
