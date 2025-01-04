import { FormEvent } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface Task {
	task: string;
	completed: boolean;
	date: string;
}

const CustomHookExample2 = () => {
	const [task, setTask] = useLocalStorage('task', '');
	const [tasks, setTasks] = useLocalStorage('tasks', []);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		const taskObj = {
			task,
			completed: false,
			date: new Date().toLocaleDateString()
		};

		setTasks([...tasks, taskObj]);
	};

	return (
		<>
			<form onSubmit={onSubmit} className='w-50 ml-6'>
				<div className='mb-3'>
					<label className='form-label'>Task</label>
					<input
						className='form-control'
						type='text'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
				</div>
				<button className='btn btn-primary' type='submit'>
					Submit
				</button>
			</form>
			{tasks.map((task: Task) => (
				<h3 key={task.date}>{task.task}</h3>
			))}
		</>
	);
};

export default CustomHookExample2;
