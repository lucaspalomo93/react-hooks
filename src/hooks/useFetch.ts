import { useEffect, useState } from 'react';

export interface Post {
	id: number;
	title: string;
}

type FetchType = {
	data: Post[] | null;
	loading: boolean;
	error: Error | null;
};

function useFetch(url: string, options: object): FetchType {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, options);
				const data = await response.json();

				setData(data);
				setLoading(false);
			} catch (e) {
				setError(e as Error);
				setLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error };
}

export default useFetch;
