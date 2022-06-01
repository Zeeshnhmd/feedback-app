import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
