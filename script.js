// bagian button di about

function myFunction() {
  document.getElementById("dots").style.display = "none";
  document.getElementById("more").style.display = "inline";
  document.getElementById("myBtn").style.display = "none";
  document.getElementById("myBtnLess").style.display = "block";
}

function myFunctionLess() {
  document.getElementById("dots").style.display = "inline";
  document.getElementById("more").style.display = "none";
  document.getElementById("myBtn").style.display = "block";
  document.getElementById("myBtnLess").style.display = "none";
}




// JavaScript to handle navbar background change on scroll
window.addEventListener('scroll', function() {
var navbar = document.querySelector('.navbar-scroll');
if (window.scrollY > 50) {  // Misalnya, setelah 50px scroll
  navbar.classList.add('scrolled');
} else {
  navbar.classList.remove('scrolled');
}
});

//   navbar scrolled
window.addEventListener("scroll", function() {
var navbar = document.getElementById("navbar");
if (window.scrollY > 50) {
navbar.classList.add("navbar-scrolled");
} else {
navbar.classList.remove("navbar-scrolled");
}
});

//   armada 
function toggleDropdown() {
var dropdown = document.getElementById("armadaOptions");
dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectArmada(value, image) {
document.getElementById("selectedArmada").textContent = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
document.getElementById("armada").value = value; // Set value ke input tersembunyi
toggleDropdown(); // Tutup dropdown setelah memilih
}



document.getElementById('viewButton').addEventListener('click', function() {
this.classList.toggle('btn-active'); // Mengganti kelas saat tombol diklik
});

// modals 
function changeImage(element, mainImageId) {
  // Mengganti gambar utama sesuai dengan gambar yang diklik
  const mainImage = document.getElementById(mainImageId);
  mainImage.src = element.src;
}

function changeImage(image, mainImageId) {
  // Mengubah gambar utama
  document.getElementById(mainImageId).src = image.src;

  // Menghapus kelas 'active' dari semua gambar kecil
  var smallImages = document.querySelectorAll('.small-image');
  smallImages.forEach(function(img) {
      img.classList.remove('active');
  });

  // Menambahkan kelas 'active' ke gambar kecil yang diklik
  image.classList.add('active');
}

// paket tour 
function changeImage1(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

function changeImage2(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

function changeImage3(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

function changeImage4(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

function changeImage5(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

function changeImage6(smallImageElement, mainImageId, caption) {
var mainImage = document.getElementById(mainImageId);
mainImage.src = smallImageElement.querySelector('img').src; // Mengganti src gambar utama
var overlayText = mainImage.parentElement.querySelector('.text-overlay');
overlayText.textContent = caption; // Mengubah teks overlay dengan keterangan yang sesuai
}

// testimoni 
//  var swiper = new Swiper(".mySwiper", {
//         slidesPerView: 3,
//         spaceBetween: 10,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });


var swiper = new Swiper('.mySwiper', {
slidesPerView: 1,
spaceBetween: 10,
pagination: {
el: '.swiper-pagination',
clickable: true, // Membuat bullet bisa diklik
},
breakpoints: {
576: {
slidesPerView: 1,
spaceBetween: 20
},
768: {
slidesPerView: 2,
spaceBetween: 30
},
992: {
slidesPerView: 3,
spaceBetween: 40
}
},
autoHeight: true,
slidesPerGroup: 1,
});

























