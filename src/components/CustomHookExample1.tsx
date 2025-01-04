import useFetch, { Post } from '../hooks/useFetch';

const CustomHookExample1 = () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const options = {};
	const { data, loading, error } = useFetch(url, options);
	if (loading) {
		return <h3>Loading...</h3>;
	}
	if (error) {
		return <h3>Error: {error.message}</h3>;
	}
	return <div>{data && data.map((post: Post) => <h3 key={post.id}>{post.title}</h3>)}</div>;
};

export default CustomHookExample1;
