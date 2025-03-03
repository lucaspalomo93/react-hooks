import { useEffect, useRef, useState } from 'react';

interface Todo {
	title: string;
}

const Todo = () => {
	const [loading, setLoading] = useState(true);
	const [todo, setTodo] = useState<Todo>();
	const isMounted = useRef(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((res) => res.json())
			.then((data) => {
				setTimeout(() => {
					if (isMounted.current) {
						setTodo(data);
						setLoading(false);
					}
				}, 3000);
			});

		// Runs when component is unmounted
		return () => {
			isMounted.current = false;
		};
	}, [isMounted]);
	return loading ? <h3>Loading...</h3> : <h1>{todo?.title}</h1>;
};

export default Todo;
