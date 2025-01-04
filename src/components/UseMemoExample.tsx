import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

const UseMemoExample = () => {
	const [number, setNumber] = useState(1);
	const [inc, setInc] = useState(0);

	const renders = useRef(1);

	useEffect(() => {
		renders.current = renders.current + 1;
	}, [renders]);

	// const sqrt = getSqrt(number);
	const sqrt = useMemo(() => getSqrt(number), [number]);

	const onClick = () => {
		setInc((prev) => prev + 1);
		console.log('inc...', inc);
	};

	return (
		<div>
			<input
				type='number'
				value={number}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(Number(e.target.value))}
				className='form-control w-25'
			/>
			<h2 className='my-3'>
				The sqrt of {number} is {sqrt}
			</h2>
			<button onClick={onClick} className='btn-primary btn'>
				Re Render
			</button>
			<h3>{renders.current}</h3>
		</div>
	);
};

function getSqrt(n: number) {
	for (let i = 0; i <= 10000; i++) {
		console.log(i);
	}
	console.log('Expensive call executed!');
	return Math.sqrt(n);
}

export default UseMemoExample;
