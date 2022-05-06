import React, { useState } from 'react';
import Card from './components/Card';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	console.log(feedback);
	return (
		<div>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
				<Card>Hello world</Card>
			</div>
		</div>
	);
};

export default App;
