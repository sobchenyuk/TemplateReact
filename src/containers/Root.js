import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { create } from 'actions'

import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "../components/Test";

const store = configureStore();
store.dispatch(create());

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Test/>
			</Provider>
		)
	}
}