import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>This is a react app to leave Feedback for a product or service</p>
				<p>Version: 1.0.0</p>
				<Link to="/">Back to Home</Link>
			</div>
		</Card>
	);
};

export default AboutPage;
