import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
	return (
		<button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
			{children}
		</button>
	);
};

/**
 * * passing default props
 */

Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false,
};

/**
 * * Setting propTypes
 */

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Button;

/**
 * * passing props for Button
 * * - {children props stands for name of the button},
 * * - {version props stands for the color of the button},
 * * - {type props stands for the type of the button},
 * * - {isDisabled props stands for (button will be active or not by default its false but if we will pass true then the button will be disabled)}
 */
