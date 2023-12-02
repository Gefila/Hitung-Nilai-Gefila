const absen = document.getElementById("absen");
const tugas = document.getElementById("tugas");
const uts = document.getElementById("uts");
const uas = document.getElementById("uas");
const hasil = document.getElementById("hasil");
const hasil2 = document.getElementById("hasil2");
const hasil3 = document.getElementById("hasil3");

function total() {
	const nilaiAbsen = Number(absen.value) * 0.1;
	const nilaiTugas = Number(tugas.value) * 0.2;
	const nilaiUTS = Number(uts.value) * 0.3;
	const nilaiUAS = Number(uas.value) * 0.4;
	const total = nilaiAbsen + nilaiTugas + nilaiUTS + nilaiUAS;

	if (nilaiUAS == "" || nilaiUAS == null || nilaiUAS == 0) {
        const mins =Math.ceil(((81 - total) / 0.4 ) + (nilaiUAS/0.4))
        console.log
        hasil3.innerHTML=`ANDA HARUS MENDAPATKAN NILAI ${mins} SAAT UAS JIKA INGIN NILAI A`
	}else{
        hasil3.innerHTML=""
    }

	if (total >= 81) {
		hasil.innerHTML = "A";
	} else if (total >= 71) {
		hasil.innerHTML = "B";
	} else if (total >= 60) {
		hasil.innerHTML = "C";
	} else if (total >= 50) {
		hasil.innerHTML = "D";
	} else {
		hasil.innerHTML = "E";
	}

	hasil2.innerHTML = total;
}
