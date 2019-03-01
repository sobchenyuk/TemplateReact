import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';

export const ILAlert = props => {
	const windowAlert = (closeAlert) => {
		const { colorAlert, styleAlert, children, textAlert} = props;
		if(closeAlert) {
			return (
				<UncontrolledAlert
					color={colorAlert}
					style={{...styleAlert}}
				>
					{children ? children : textAlert}
				</UncontrolledAlert>
			)
		} else {
			return (
				<Alert
					color={colorAlert}
					style={{...styleAlert}}
				>
					{children ? children : textAlert}
				</Alert>
			)
		}
	};
	return windowAlert(props.closeAlert)
};

ILAlert.propTypes = {
	textAlert: PropTypes.string,
	styleAlert: PropTypes.object,
	colorAlert: PropTypes.string.isRequired,
	closeAlert: PropTypes.bool.isRequired,
};

ILAlert.defaultProps = {
	colorAlert: 'light',
	closeAlert: false
};