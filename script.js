const judulInput = document.getElementById("judul");
const penulisInput = document.getElementById("penulis");
const tambahBtn = document.getElementById("tambahBtn");
const daftarBuku = document.getElementById("daftarBuku");
const cariBuku = document.getElementById("cariBuku");

// Event Listener tombol tambah
tambahBtn.addEventListener("click", function () {

    const judul = judulInput.value.trim();
    const penulis = penulisInput.value.trim();

    if (judul === "" || penulis === "") {
        alert("Judul dan Penulis harus diisi!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${judul} - ${penulis}</span>
        <button class="hapus">Hapus</button>
    `;

    daftarBuku.appendChild(li);

    judulInput.value = "";
    penulisInput.value = "";
});

// Event Listener hapus buku
daftarBuku.addEventListener("click", function(e){

    if(e.target.classList.contains("hapus")){
        e.target.parentElement.remove();
    }

});

// Event Listener pencarian buku
cariBuku.addEventListener("keyup", function(){

    const keyword = cariBuku.value.toLowerCase();

    const semuaBuku = document.querySelectorAll("#daftarBuku li");

    semuaBuku.forEach(function(buku){

        const teks = buku.textContent.toLowerCase();

        if(teks.includes(keyword)){
            buku.style.display = "flex";
        }else{
            buku.style.display = "none";
        }

    });

});