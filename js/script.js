document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");
        console.log("Scroll position:", window.scrollY); // Log posisi scroll
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
            console.log("Shrink class added"); // Log jika shrink ditambahkan
        } else {
            navbar.classList.remove("shrink");
            console.log("Shrink class removed"); // Log jika shrink dihapus
        }
    });
});

$(document).ready(function () {
    let contentButton = $("#contentButton");
    let navButton = $("#navButton");
    let contentButtonHp = $("#contentButtonHp");
    let navButtonHp = $("#navButtonHp");

    // Sembunyikan tombol navbar saat halaman dimuat
    navButton.hide();
    navButtonHp.hide();

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();

        if (scrollPosition > 700) { 
            contentButton.fadeOut(); 
            navButton.fadeIn(); 
        } else { 
            contentButton.fadeIn();
            navButton.fadeOut();
        }

        if (scrollPosition > 460) { 
            contentButtonHp.fadeOut();
            navButtonHp.fadeIn();
        } else { 
            contentButtonHp.fadeIn();
            navButtonHp.fadeOut();
        }
    });
});

const button = document.querySelector('.scrolling-button');
const text = document.querySelector('.scrolling-text');

// Fungsi untuk memeriksa apakah teks lebih panjang dari lebar tombol
const checkTextLength = () => {
  const textWidth = text.offsetWidth; // Lebar teks
  const buttonWidth = button.offsetWidth; // Lebar tombol

  // Jika teks lebih panjang, tambahkan class untuk mulai scroll
  if (textWidth > buttonWidth) {
    text.classList.add('scrollable');
  } else {
    text.classList.remove('scrollable');
  }
};

// Fungsi untuk menambahkan delay hanya pada tampilan mobile
const checkResize = () => {
  // Cek apakah tampilan di perangkat mobile (misalnya lebar layar < 768px)
  if (window.innerWidth < 768) {
    setTimeout(() => {
      checkTextLength(); // Panggil fungsi untuk mengecek panjang teks setelah delay
    }, 3000); // Delay 5 detik (5000ms)
  } else {
    checkTextLength(); // Untuk perangkat non-mobile, langsung cek tanpa delay
  }
};

// Memeriksa ukuran teks dan tombol saat halaman pertama kali dimuat
checkResize();

// Menangani perubahan ukuran layar
window.addEventListener('resize', checkResize);