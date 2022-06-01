import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
	const { feedback } = useContext(FeedbackContext);
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	/**
	 * * now it is possible that the rating should be displayed like this (7.666666), but we don't want it to be displayed like that so what we will do is that
	 */

	average = average.toFixed(1).replace(/[./]0$/, '');
	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			{/* here we are writing that if there is no rating then show 0 and if there is rating then show us average rating  */}
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

export default FeedbackStats;
