import React, { useState } from 'react';
import Card from './Card';

const FeedbackForm = () => {
	const [text, setText] = useState('');
	const handleText = (e) => {
		setText(e.target.value);
	};
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				<div className="input-group">
					<input
						type="text"
						placeholder="Write a review"
						onChange={handleText}
						value={text}
					/>
					<button type="submit">Send</button>
				</div>
			</form>
		</Card>
	);
};

export default FeedbackForm;
