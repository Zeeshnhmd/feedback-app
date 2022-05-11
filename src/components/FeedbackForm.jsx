import React, { useState } from 'react';
import Card from './Card';
import Button from './shared/Button';

const FeedbackForm = () => {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	/**
	 * * - Here in the "if" candition we are saying that if the text input field is empty then disable the button and dont show any message.
	 * * - And in the "else if" condition we are saying that if the text is less than or equal to 10 character then keep the button disabled and show a message which says 'Text must be at least 10 characters', and the ".trim()" checks that if there is any space or not between the texts.
	 * * - And in the "else" condition checks that if the message is greater then 10 characters then dont show any message and enable the button.
	 */

	const handleText = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}
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
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{/* here we are saying that if the message is less the 10 characters then display this text */}
				{message && <div className="message"> {message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;

/**
 * * created a feedbackform component in which have a input field which is being updated when something is typed, to updated the input field used a useState hook
 */
