import {
	FETCH_DOTS,
	ADD_DOTS,
	CREATE_DOTS,
	EDIT_DOTS,
	DELETE_DOTS,
} from "./types";
import firebase from "../../../firebase/firebase";

// スネーク係数になおす
export const fetchDots = () => async (dispatch) => {
	await firebase
		.firestore()
		.collection("dots")
		.onSnapshot((snapshot) => {
			const response = snapshot.docs.map((doc) => {
				return doc.data();
			});
			dispatch({ type: FETCH_DOTS, payload: response });
		});
};

export const addDots = (text) => {
	return {
		type: ADD_DOTS,
		payload: text,
	};
};

export const createDots = () => {
	return {
		type: CREATE_DOTS,
	};
};

export const editDots = () => {
	return {
		type: EDIT_DOTS,
	};
};

export const deleteDots = () => {
	return {
		type: DELETE_DOTS,
	};
};
