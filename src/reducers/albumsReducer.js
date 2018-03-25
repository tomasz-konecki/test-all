import { ALBUM_RELEASED } from "./../constants";

const initialState = {
	band: "Pet Shop Boys",
	albums: []
};

export const albumsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALBUM_RELEASED:
			return {
				...state,
				albums: [ ...state.albums, action.newAlbum ]
			};
		default:
			return state;
	}
};
