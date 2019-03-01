// ADD_TODO
import axios from 'axios'
import {ADD_TODO,CREATED_TODO} from "../constants/redux";

let nextTodoId = 0;
export const addTodo = text => ({
	type: ADD_TODO,
	id: nextTodoId++,
	text
});

export const create = () => {
	return (dispatch) => {
		axios.get('/data.json').then(res => {
			dispatch({type: CREATED_TODO, payload: res.data});
			nextTodoId = res.data.length;
		})
	}
};