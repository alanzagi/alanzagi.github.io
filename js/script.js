// Fungsi untuk mengambil apapun data yang diinputkan di Pesan Whatsapp
document.getElementById("message-submit-button").addEventListener("click", function () {
  const inputText = document.getElementById("message-input").value;
  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent(inputText)}`;
  window.open(whatsappUrl, "_blank");
});

//Init tooltips
tippy(".link", {
  placement: "bottom",
});

//Toggle mode
const toggle = document.querySelector(".js-change-theme");
const body = document.querySelector("body");
const profile = document.getElementById("profile");

toggle.addEventListener("click", () => {
  if (body.classList.contains("text-gray-900")) {
    toggle.innerHTML = "☀️";
    body.classList.remove("text-gray-900");
    body.classList.add("text-gray-100");
    profile.classList.remove("bg-white");
    profile.classList.add("bg-gray-900");
  } else {
    toggle.innerHTML = "🌙";
    body.classList.remove("text-gray-100");
    body.classList.add("text-gray-900");
    profile.classList.remove("bg-gray-900");
    profile.classList.add("bg-white");
  }
});
