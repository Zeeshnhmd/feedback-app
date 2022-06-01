import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Feedbackitem from './Feedbackitem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.length === 0) {
		return <p>No feedback Yet</p>;
	}
	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Feedbackitem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default FeedbackList;
