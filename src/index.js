import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./containers/Root";

import { AppContainer } from 'react-hot-loader';

import * as serviceWorker from './serviceWorker';

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Root/>
		</AppContainer>,
		document.getElementById('root')
	);
};

render();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./containers/Root', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();