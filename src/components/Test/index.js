import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ILAlert} from "common/components/ILAlert";
import {connect} from "react-redux";
import {addTodo} from 'actions'

class Test extends Component {
	render() {
		return (
			<div>

				<span className={{selected: false, visible: true}} />

				<ILAlert
					textAlert='This is a dark alert — check it out!'
					closeAlert
				>
					This is a dark alert — check it out!
				</ILAlert>
				<button onClick={() => this.props.addTodo('text-test')}>test</button>

				<ul>
					{
						this.props.todos.map((elem, index) =>
							<li key={elem.id.toString()}>{elem.text}</li>
						)
					}

				</ul>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(
	mapStateToProps, {addTodo}
)(Test);

Test.defaultProps = {
	todos: []
};

Test.propTypes = {
	todos: PropTypes.array,
	addTodo: PropTypes.func.isRequired,
};