// Indikator bahwa file JS berhasil dimuat
console.log("JavaScript Poliban digiCraft studio siap digunakan.");

/* A. LOGIKA UNTUK HALAMAN PRODUK (produk.html) */

//1.fungsi konfimasi pemesanan paket layanan 
function pesanpaket(namapaket, harga) {
    let konfimasi = confirm(
        "Anda memilih paket: " + namapaket + " (" + harga + ")\n" +
        "Apakah anda memilih ignin melanjutkan ke halaman formulir kontrak?"
    );

    if(konfimasi){
        //Redicect ke halaman kontak jika penggunakan menyetejui
        window.location.href="kontak html";
    }
}

//2. Fungsi Simulasi Hitung Eastimasi Biaya 
function hitungEstimasi() {
    let paketselect = document.getElementById("pilihan-paket");
    let addonSelect = document.getElementById("Layanan-tamabahan");
    let hasilText   = document.getElementById("Hasil-Esteminasi");
    
    //Validasi Pemilihan paket dasar
    if(!paketselect.value){
        alert("Peringatan: Silahkan pilih salah satu paket layanan terlebih dahulu");
    }

    let hargaDasar     = parseInt(paketselect.value);
    let BiayaTambahan  = parseInt(addonSelect.value);
    let total = hargaDasar + BiayaTambahan;

    //Tampilan hasil  ke DOM dengan format rupiah
    hasilText.innerText = "Rp "+ total.toLocaleString(id-ID);
    hasilText.style.color = "#008080"; // akses warna teal poliban

}


/* B. LOGIKA UNTUK HALAMAN KONTAK (kontak.html) */

//Hitunglah indeks untuk penomoran field dinamis
function tambahInputLink(){
    jumlahLink++;

    //1. AMbil Elemen wadah penampung 
    let container = document.getElementById("wadah-refensi");

    //2. Buat Elemen Bris wrapper baru (<div>)
    let divBaru = document.createElement("div")
    divBaru.className = "dynamic-input-row";
    divBaru.id ="referensi-row" + jumlahLink; 

     //3. Masukan Template HTML Untuk inputan baru beserta tombol hapus 
     divBaru.innerHTML = `
        <input type="url" name="Referensi_link[]" placeholder="https://contoh-website-acuan-sini.com" class="input-dynamic">
        <button type="button" class="btn-hapus" onclick="hapusInputLink('referensi-row-${jumlahLink}')">Hapus</button>
        `;

    //4. Sisipkan elemen baru ke dalam container DOM 
    container.appendChild(divBaru);
    console.log("input link referensi ke-" + jumlahLink +" berhasil ditambahkan.");
}

// Fungsi Menghapus Baris Inputan Tertentu 
function hapusInputLink(rowID) {
    let barisTarget = document.getElementById(rowID);
    if (barisTarget){
        barisTarget.remove();
        console.log("Elemen " = + rowID + "berhasil dihapus");
    }
}
