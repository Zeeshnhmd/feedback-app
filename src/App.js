import { FaQuestion } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';

const App = () => {
	return (
		<>
			<FeedbackProvider>
				<Header />
				<div className="container">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
									<div className="about-link">
										<Link to="about">
											<FaQuestion size={30} />
										</Link>
									</div>
								</>
							}
						/>
						<Route path="about" element={<AboutPage />} />
					</Routes>
				</div>
			</FeedbackProvider>
		</>
	);
};

export default App;
