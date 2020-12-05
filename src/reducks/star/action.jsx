export const FETCH_TODAY_DOT_LENGTH = "FETCH_TODAY_DOT_LENGTH";
export const fetch_todayDotLength = (todayDotLength) => {
	return {
		type: FETCH_TODAY_DOT_LENGTH,
		payload: todayDotLength,
	};
};

export const SET_STAR = "SET_STAR";
export const set_star = (todayDotLength) => {
	return {
		type: SET_STAR,
		payload: todayDotLength,
	};
};

export const UNSET_STAR = "UNSET_STAR";
export const unset_star = (todayDot) => {
	return {
		type: UNSET_STAR,
		payload: todayDot,
	};
};
