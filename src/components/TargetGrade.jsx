import { useRef, useState } from "react";
import Header from "./Header";
import Input from "./Input";

export default function TargetGrade() {
	const [absen, setAbsen] = useState("");
	const [tugas, setTugas] = useState("");
	const [uts, setUts] = useState("");
    const [targetGrade, setTargetGrade] = useState("A");
    const [nilai, setNilai] = useState(0);

	const focusInput = useRef(null);

	function resetForm() {
		setAbsen("");
		setTugas("");
		setUts("");
		setTargetGrade("A");
	}

    function hitungTargetGrade(e) {
        e.preventDefault();
        let targetNilai = 0;
        if(targetGrade === "A") {
            targetNilai = 91;
        } else if(targetGrade === "A-") {
            targetNilai = 81;
        } else if(targetGrade === "B+") {
            targetNilai = 76;
        } else if(targetGrade === "B") {
            targetNilai = 71;
        } else if(targetGrade === "B-") {
            targetNilai = 66;
        } else if(targetGrade === "C+") {
            targetNilai = 61;
        } else if(targetGrade === "C") {
            targetNilai = 56;
        }
        const grade = absen * 0.1 + tugas * 0.2 + uts * 0.3;
        let nilai =  (targetNilai-grade) / 0.4;
        console.log(nilai);
        setNilai(nilai);
    }

	return (
		<div className="flex flex-col items-center">
			<div className="w-full bg-zinc-600 rounded-md p-4 lg:w-1/2">
				<Header>Target Grade</Header>
				<form className="flex flex-col gap-3" onSubmit={hitungTargetGrade}>
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
					<div className="flex flex-col">
						<label htmlFor="" className="text-white text-lg">
							Target Grade
						</label>
						<select className="p-1.5 rounded-md" value={targetGrade} onChange={(e)=> setTargetGrade(e.target.value)}>
							<option value="A">A (4,0)</option>
							<option value="A-">A- (3,70)</option>
                            <option value="B+">B+ (3,30)</option>
                            <option value="B">B (3,00)</option>
                            <option value="B-">B- (2,70)</option>
                            <option value="C+">C+ (2,30)</option>
                            <option value="C">C (2,00)</option>
                            <option value="C-">C- (1,70)</option>
						</select>
					</div>
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

            <div className="text-black">
                {`jika ingin mendapatkan nilai ${targetGrade} maka nilai yang harus dicapai adalah ${nilai}`}
            </div>
		</div>
	);
}
