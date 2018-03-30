import { CHANGE_PROJECT } from "./../constants";

export const changeProject = (projectId) => ({
	type: CHANGE_PROJECT,
	projectId
});
