import React from 'react';
import PropTypes from 'prop-types';
// const Header = (props) => {
// 	return <div>{props.text}</div>;
// };

// we can also set props as
const Header = ({ text, title }) => {
	return (
		<div>
			{text}
			<p>{title}</p>
		</div>
	);
};

// we can set default props as
Header.defaultProps = {
	text: 'Feedback UI',
};

// we can check proptypes like this {if we wanna keep this prop type as required then we can add isRequired at last}
Header.prototype = {
	text: PropTypes.string,
};
export default Header;
