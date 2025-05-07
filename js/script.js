document.getElementById('preorderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const hp = document.getElementById('hp').value.trim();
    const warna = document.getElementById('warna').value;
  
    if (!nama || !email || !hp || !warna) {
      alert("Semua field wajib diisi!");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email tidak valid!");
      return;
    }
  
    alert("Terima kasih telah melakukan pre-order!");
    this.reset();
  });
 
  let currentSlide = 0;
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    function updateSlide() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
    }


  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

