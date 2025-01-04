import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UseCallBackExample from './components/UseCallBackExample';
import CustomHookExample1 from './components/CustomHookExample1';
// import UseMemoExample from './components/UseMemoExample';
// import UseRefExample3 from './components/UseRefExample3';
// import UseRefExample1 from './components/UseRefExample1';
// import UseRefExmaple2 from './components/UseRefExmaple2';

function App() {
	return (
		<>
			<h1 className='bg-slate-200 text-black bold font-bold text-center py-3 mb-10'>HOOKS</h1>
			{/* <UseRefExample1 /> */}
			{/* <UseRefExmaple2 /> */}
			{/* <UseRefExample3 /> */}
			{/* <UseMemoExample /> */}
			{/* <UseCallBackExample /> */}
			<CustomHookExample1 />
		</>
	);
}

export default App;
