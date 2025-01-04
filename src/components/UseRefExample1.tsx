import { FormEvent, useRef } from 'react';

const UseRefExample1 = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(inputRef?.current?.value);
	};
	return (
		<div>
			<form onSubmit={onSubmit} className='mb-4 d-flex flex-col gap-3'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					ref={inputRef}
					id='name'
					className='form-control border-solid border-2 border-sky-500 rounded'
				/>
				<div className='d-flex justify-content-center'>
					<button type='submit' className='btn btn-primary lg:w-80 md:w-80 sm:w-40'>
						Submit
					</button>
				</div>
			</form>

			<div className='d-flex justify-center'>
				<p
					className='btn btn-secondary max-w-md my-0 mx-auto text-center'
					onClick={() => inputRef.current?.focus()}
				>
					Focus!
				</p>
			</div>
		</div>
	);
};

export default UseRefExample1;
