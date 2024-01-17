import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { NavBar } from './components/Navbar';

function App() {
	return (
		<>
			<NavBar />
			<Container component="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
