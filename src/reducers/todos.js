import {ADD_TODO, CREATED_TODO} from "../constants/redux";

export const todos = (state = [], action) => {
	const payload = action.payload;
	switch (action.type) {
		case CREATED_TODO:
			return [
				...state,
				...payload
				];
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		default:
			return state
	}
};