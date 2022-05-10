import React, { useState } from 'react';
import Card from './Card';
import Button from './shared/Button';

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
					<Button type="submit" version="secondary">
						Send
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default FeedbackForm;

/**
 * * created a feedbackform component in which have a input field which is being updated when something in typed, to updated the input field used a useState hook
 */
