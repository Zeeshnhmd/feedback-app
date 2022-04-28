import React from 'react';
import PropTypes from 'prop-types';
// const Header = (props) => {
// 	return <div>{props.text}</div>;
// };

// we can also set props as

// we can also pass styles as props in JSX
const Header = ({ text, title, bgColor, textColor }) => {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	// const headerStyles = {
	// 	backgroundColor: 'blue',
	// 	color: 'red',
	// };
	return (
		// we can pass style inside a variable in JSX like this

		<header style={headerStyles}>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>

		// we can add inline styles like this is JSX

		// <header style={{ backgroundColor: 'red', color: 'blue' }}>
		// 	<div className="container">
		// 		<h2>{text}</h2>
		// 	</div>
		// </header>
	);
};

// we can set default props as
Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

// we can check proptypes like this {if we wanna keep this prop type as required then we can add isRequired at last}
Header.prototype = {
	text: PropTypes.string,
};
export default Header;
