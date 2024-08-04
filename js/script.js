// Fungsi untuk mengambil apapun data yang diinputkan di Pesan Whatsapp
document.getElementById("message-submit-button").addEventListener("click", function () {
  const inputText = document.getElementById("message-input").value.trim(); // Menghapus spasi tambahan
  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent(inputText)}`;
  window.open(whatsappUrl, "_blank");
});

document.getElementById("message-submit-button2").addEventListener("click", function () {
  // Mengambil data dari input dan textarea
  const nameInput = document.getElementById("name-input").value.trim();
  const messageInput = document.getElementById("message-input2").value.trim();

  // Membuat URL WhatsApp
  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent("Halo, Nama saya " + nameInput + " dan tujuan saya adalah " + messageInput)}`;

  // Membuka URL di tab baru
  window.open(whatsappUrl, "_blank");
});
