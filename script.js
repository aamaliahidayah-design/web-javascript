// 1. Menyeleksi elemen form dan area hasil
const formKalkulator = document.getElementById('form-kalkulator');
const areaHasil = document.getElementById('hasil-kalkulasi');
const teksRincian = document.getElementById('teks-rincian');
const teksTotal = document.getElementById('teks-total');

// 2. Menambahkan Event Listener
formKalkulator.addEventListener('submit', function(event) {
    // Mencegah halaman ter-refresh otomatis
    event.preventDefault(); 
    
    // Proses selanjutnya akan ditulis di sini...
    // (Lanjutan di dalam event listener...)
    
    // Mengambil nilai dari form dan mengubahnya menjadi tipe data angka (Number)
    const jumlahOrang = parseInt(document.getElementById('jumlah-orang').value);
    const lamaHari = parseInt(document.getElementById('lama-hari').value);
    const hargaPaket = parseInt(document.getElementById('paket-wisata').value);

    // Validasi Logika
    if (jumlahOrang <= 1 || lamaHari <= 1 ) {
        alert("Jumlah orang dan lama menginap harus boleh kurang dari 1!");
        return; // Menghentikan eksekusi kode di bawahnya

    }

    //Tambahkan layanan tambahan dan kode promo
    const hargaPaket =
     parseInt(document.getElementById('paket-wisata').value);

    const asuransi = 
    document.getElementById('asuransi').checked;
    const fotografer = 
    document.getElementById('foto').checked;
    const promo = 
    document.getElementById('promo').value.toUpperCase();

    // Kalkulasi Biaya Dasar
let subtotal = jumlahOrang * lamaHari * hargaPaket;
let layanan = 0;

if (asuransi) {
    layanan += 50000 * jumlahOrang;
}

if (fotografer) {
    layanan += 300000 * lamaHari;
}

let totalBiaya = subtotal + layanan;
let pesanDiskon = "";

    // Penerapan Aturan Bisnis (Diskon 10% jika lebih dari 5 orang)
let nilaiDiskon = 0;

if (promo === "ACEHHEBAT") {
    nilaiDiskon = totalBiaya * 0.10;
    totalBiaya = totalBiaya - nilaiDiskon;
    pesanDiskon = `<br><span class="alert-diskon">Selamat! Anda mendapatkan diskon 10% dengan kode promo ACEHHEBAT.</span>`;
}
    // Menghapus class 'hidden' agar area hasil terlihat
    areaHasil.classList.remove("hidden");

    // Menuliskan hasil ke dalam HTML (DOM Manipulation)
    teksRincian.innerHTML = 'Paket untuk ' + jumlahOrang + ' orang selama ' + lamaHari + ' hari. ' + pesanDiskon;
    
    // Memformat angka menjadi Rupiah (Opsional untuk pengayaan)
    const formatRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalBiaya);
    
    teksTotal.innerText = `Total Biaya: ${formatRupiah}`;
});
