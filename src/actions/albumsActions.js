import { ALBUM_RELEASED } from "./../constants";

export const albumReleased = (album) => ({
	type: ALBUM_RELEASED,
	newAlbum: album
});
