import { createContext, useState, useEffect } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	/**
	 * * fetch feedback
	 */
	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = async () => {
		const response = await fetch('/feedback?_sort=id&_order=desc');
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	/**
	 * * DeleteFeedback
	 */
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/feedback/${id}`, {
				method: 'DELETE',
			});
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	/**
	 * * AddFeedback
	 */
	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});
		const data = await response.json();

		setFeedback([data, ...feedback]);
	};

	/**
	 * * EditFeedback
	 */
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	/**
	 * * UpdateFeedback
	 */
	const updateFeedback = async (id, updatedItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		});
		const data = await response.json();
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				isLoading,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
