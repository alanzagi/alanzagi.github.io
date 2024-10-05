// Fungsi untuk mengambil apapun data yang diinputkan di Pesan Whatsapp
document.getElementById("message-submit-button").addEventListener("click", function () {
  const inputText = document.getElementById("message-input").value.trim(); // Menghapus spasi tambahan

  // Memeriksa apakah input kosong
  if (inputText === "") {
    Swal.fire({
      icon: "error",
      title: "Gagal mengirim",
      text: "Harap isi semua bidang sebelum mengirim pesan",
      confirmButtonColor: "#f44336", // Ganti dengan warna yang diinginkan
      confirmButtonText: "OK",
    });
    return; // Menghentikan eksekusi jika input kosong
  }

  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent(inputText)}`;
  window.open(whatsappUrl, "_blank");
});

document.getElementById("message-submit-button2").addEventListener("click", function () {
  // Mengambil data dari input dan textarea
  const nameInput = document.getElementById("name-input").value.trim();
  const messageInput = document.getElementById("message-input2").value.trim();

  // Memeriksa apakah input kosong
  if (nameInput === "" || messageInput === "") {
    Swal.fire({
      icon: "error",
      title: "Gagal mengirim",
      text: "Harap isi semua bidang sebelum mengirim pesan",
      confirmButtonColor: "#f44336", // Ganti dengan warna yang diinginkan
      confirmButtonText: "OK",
    });
    return; // Menghentikan eksekusi jika input kosong
  }

  const receiptMessage = `Nama Lengkap: ${nameInput} \nPesan: ${messageInput}`;

  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent(receiptMessage)}`;

  // Membuka URL di tab baru
  window.open(whatsappUrl, "_blank");
});
