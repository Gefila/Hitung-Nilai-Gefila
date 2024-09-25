export default function GradeResult({ grade, mutu, keterangan, totalNilai }) {
	return (
		<div className="bg-zinc-600 rounded-md p-4 mt-4 min-h-[180px]">
			<div className="flex flex-col gap-3 text-lg">
				<div className="flex justify-between">
					<span className="text-white">Grade</span>
					<span className="text-white font-medium">{grade}</span>
				</div>
				<div className="flex justify-between">
					<span className="text-white">Total Nilai</span>
					<span className="text-white font-medium">{totalNilai}</span>
				</div>
				<div className="flex justify-between">
					<span className="text-white">Mutu</span>
					<span className="text-white font-medium">{mutu}</span>
				</div>
				<div className="flex justify-between">
					<span className="text-white">Keterangan</span>
					<span className="text-white font-medium">{keterangan}</span>
				</div>
			</div>
		</div>
	);
}
