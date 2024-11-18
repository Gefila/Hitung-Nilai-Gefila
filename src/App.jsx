import { Link } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col h-screen items-center w-full bg-zinc-900 p-5">
			<div className="bg-zinc-600 flex flex-col items-center p-2 w-full rounded-md">
				<h1 className="text-white text-3xl my-7 font-semibold">Grade Calculator</h1>
				<Link
					to="/hitung-grade"
					className="bg-zinc-800 w-full p-2 rounded-md text-white text-center"
				>
					Hitung Grade
				</Link>
				<Link
					to="/target-grade"
					className="bg-zinc-800 w-full p-2 rounded-md text-white mt-2 text-center"
				>
					Target Grade
				</Link>
			</div>
		</div>
	);
}

export default App;
