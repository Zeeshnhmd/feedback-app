import React from 'react';
import Spin from '../assests/spinner.gif';

const Spinner = () => {
	return (
		<img
			src={Spin}
			alt="Loading..."
			style={{ width: '100px', margin: 'auto', display: 'block' }}
		/>
	);
};

export default Spinner;
