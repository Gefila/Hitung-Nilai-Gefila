export default function HitungGrade() {
	return (
		<>
			<div className="w-full bg-zinc-600 rounded-md p-4">
				<header className="text-center text-white mb-5">Hitung Grade</header>
				<form className="flex flex-col gap-4">
					<div className="flex flex-col">
						<label htmlFor="absen" className="text-white">
							Absen
						</label>
						<input
							type="number"
							id="absen"
							className="bg-zinc-300 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="tugas" className="text-white">
							Tugas
						</label>
						<input
							type="number"
							id="tugas"
							className="bg-zinc-300 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="uts" className="text-white">
							UTS
						</label>
						<input
							type="number"
							id="uts"
							className="bg-zinc-300 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="uas" className="text-white">
							UAS
						</label>
						<input
							type="number"
							id="uas"
							className="bg-zinc-300 p-1 rounded-md"
						/>
					</div>
					<div className="flex gap-2">
						<button className="bg-zinc-300 p-1 rounded-md text-white grow">
							Hitung
						</button>
						<button className="bg-zinc-300 p-1 rounded-md text-white grow">
							Reset
						</button>
					</div>
				</form>
			</div>

			<div className="bg-zinc-600 rounded-md p-4 mt-4">
				<header className="text-center text-white mb-5">Hasil</header>
				<div className="flex flex-col gap-4">
					<div className="flex justify-between">
						<span className="text-white">Grade</span>
						<span className="text-white">A</span>
					</div>
					<div className="flex justify-between">
						<span className="text-white">Mutu</span>
						<span className="text-white">4.0</span>
					</div>
					<div className="flex justify-between">
						<span className="text-white">Keterangan</span>
						<span className="text-white">Lulus</span>
					</div>
				</div>
			</div>
		</>
	);
}
