import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
		const response = await fetch(
			'http://localhost:5000/feedback?_sort=id&_order=asc'
		);
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	/**
	 * * DeleteFeedback
	 */
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	/**
	 * * AddFeedback
	 */
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
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
	const updateFeedback = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
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
