const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("font-bold", "text-blue-600");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("font-bold", "text-blue-600");
    }
  });
});

const menuButton = document.getElementById("menuButton");
const navbarCta = document.getElementById("navbar-cta");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

menuButton.addEventListener("click", () => {
  navbarCta.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Tutup navbar saat salah satu nav-link diklik (opsional tapi UX bagus)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navbarCta.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
});

function sendToWhatsApp() {
  const name = document.getElementById("name-input").value.trim();
  const message = document.getElementById("message-input").value.trim();

  if (!name || !message) {
    Swal.fire({
      icon: "warning",
      title: "Oops!",
      text: "Isi nama dan pesan dulu ya!",
      confirmButtonColor: "#5e57e4",
    });
    return;
  }

  const phone = "62815213350913";
  const text = `Halo, Nama saya Alan ${name}. Pesan saya adalah \n${message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}
