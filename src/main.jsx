import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme.js';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster position="top-right" />

		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
