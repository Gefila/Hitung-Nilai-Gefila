import { useEffect, useRef, useState } from "react";
import GradeResult from "./GradeResult";
import Header from "./Header";
import Input from "./Input";

export default function HitungGrade() {
	const [absen, setAbsen] = useState("");
	const [tugas, setTugas] = useState("");
	const [uts, setUts] = useState("");
	const [uas, setUas] = useState("");
	const [totalNilai, setTotalNilai] = useState(null);
	const [grade, setGrade] = useState(null);
	const [mutu, setMutu] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const focusInput = useRef(null);

	async function hitungGrade(e) {
		e.preventDefault();
		setIsLoading(true);
		const totalNilai = await new Promise((resolve) => {
			setTimeout(() => {
				const totalNilai =
					Number(absen) * 0.1 +
					Number(tugas) * 0.2 +
					Number(uts) * 0.3 +
					Number(uas) * 0.4;
				resolve(totalNilai);
			}, 1000);
		});

		if (totalNilai >= 91 && totalNilai < 101) {
			setGrade("A");
			setMutu("4.00");
			console.log(totalNilai, grade, mutu);
		} else if (totalNilai >= 81 && totalNilai < 91) {
			setGrade("A-");
			setMutu("3.70");
		} else if (totalNilai >= 76 && totalNilai < 81) {
			setGrade("B+");
			setMutu("3.30");
		} else if (totalNilai >= 71 && totalNilai < 76) {
			setGrade("B");
			setMutu("3.00");
		} else if (totalNilai >= 66 && totalNilai < 71) {
			setGrade("B-");
			setMutu("2.70");
		} else if (totalNilai >= 61 && totalNilai < 66) {
			setGrade("C+");
			setMutu("2.30");
		} else if (totalNilai >= 56 && totalNilai < 61) {
			setGrade("C");
			setMutu("2.00");
		} else if (totalNilai >= 51 && totalNilai < 56) {
			setGrade("C-");
			setMutu("1.70");
		} else if (totalNilai >= 36 && totalNilai < 51) {
			setGrade("D");
			setMutu("1.00");
		} else if (totalNilai >= 0 && totalNilai < 36) {
			setGrade("E");
			setMutu("0.00");
		}

		setTotalNilai(totalNilai);
		setIsLoading(false);
	}

	function resetForm() {
		setAbsen("");
		setTugas("");
		setUts("");
		setUas("");
		setGrade(null);
		setMutu(null);
		setTotalNilai(null);
	}

	const keterangan = grade === "E" || grade === "D" ? "Tidak Lulus" : "Lulus";

	useEffect(() => {
		focusInput.current.focus();
	}, []);

	return (
		<div className="flex flex-col items-center">
			<div className="w-full bg-zinc-600 rounded-md p-4 lg:w-1/2">
				<Header>Hitung Grade</Header>
				<form className="flex flex-col gap-3" onSubmit={hitungGrade}>
					<Input
						id={"absen"}
						placeholder="Masukkan Nilai Absen"
						value={absen}
						onChangeInput={setAbsen}
						ref={focusInput}
					>
						Absen
					</Input>
					<Input
						id={"tugas"}
						placeholder="Masukkan Nilai Tugas"
						value={tugas}
						onChangeInput={setTugas}
					>
						Tugas
					</Input>
					<Input
						id={"uts"}
						placeholder="Masukkan Nilai UTS"
						value={uts}
						onChangeInput={setUts}
					>
						UTS
					</Input>
					<Input
						id={"uas"}
						placeholder="Masukkan Nilai UAS"
						value={uas}
						onChangeInput={setUas}
					>
						UAS
					</Input>
					<div className="flex gap-2">
						<button
							className="bg-zinc-800 p-1 rounded-md text-white grow"
							type="submit"
						>
							Hitung
						</button>
						<button
							className="bg-zinc-800 p-1 rounded-md text-white grow"
							onClick={resetForm}
							type="button"
						>
							Reset
						</button>
					</div>
				</form>
			</div>

			{isLoading && (
				<div className="bg-zinc-600 rounded-md p-4 mt-4 min-h-[180px] flex justify-center items-center text-2xl text-white font-light lg:w-1/2">
					<span className="animate-pulse">Loading...</span>
				</div>
			)}

			{!totalNilai && !isLoading && (
				<div className="bg-zinc-600 rounded-md p-4 mt-4 min-h-[180px] flex justify-center items-center text-2xl text-white font-light flex-col anima lg:w-1/2">
					<div>Created by</div>
					<div>
						<a
							href="https://www.instagram.com/gefilazonap/"
							target="_blank"
						>
							Gefila Zona Pranata
						</a>
					</div>
				</div>
			)}

			{!!totalNilai && !isLoading && (
				<GradeResult
					grade={grade}
					mutu={mutu}
					keterangan={keterangan}
					totalNilai={totalNilai.toFixed(2)}
				/>
			)}
		</div>
	);
}
