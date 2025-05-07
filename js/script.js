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
 
  const slider = document.getElementById("slider");
    let currentIndex = 0;

    function showSlide(index) {
      const totalSlides = slider.children.length;
      if (index >= totalSlides) currentIndex = 0;
      else if (index < 0) currentIndex = totalSlides - 1;
      else currentIndex = index;

      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

