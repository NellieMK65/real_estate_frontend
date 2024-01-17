import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Container } from '@mui/material';

function App() {
	return (
		<Container component="main">
			<Routes>
				<Route path="/" element={<>Home</>} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Container>
	);
}

export default App;
