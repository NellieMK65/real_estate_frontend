import { useEffect, useState } from 'react';
import { api } from '../utils';

export const Home = () => {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		const getProperties = async () => {
			const session = JSON.parse(localStorage.getItem('session'));

			const res = await api.get('property');
			console.log(res?.data);
			if (res?.data) {
				setProperties(res.data);
			}
		};

		getProperties();
	}, []);

	return <div>Home</div>;
};
