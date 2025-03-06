document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const icons = document.querySelector(".icons");

    if (!hamburger || !navLinks || !icons) {
        console.error("Navbar elemanları bulunamadı! Sınıf isimlerini kontrol edin.");
        return;
    }

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        icons.classList.toggle("active");
    });
});





/// benner 


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".grid-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.querySelector("h3").innerText}`);
        });
    });
});





/// slide
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Sayfa yüklendiğinde ilk slide'ı göster
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
});

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;  // Son slayttan sonra tekrar başa döner
    } else if (index < 0) {
        currentIndex = slides.length - 1;  // İlk slayttan geriye gidince en son slayta döner
    } else {
        currentIndex = index;  // Normal durumda gelen indexi kullan
    }

    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentIndex ? "1" : "0"; // Aktif olan slayt görünür, diğerleri gizlenir
        slide.style.transform = i === currentIndex ? "translateX(0) scale(1)" : "translateX(100%) scale(0.9)"; // Slaytın kaymasını ve ölçeklendirilmesini sağlar
        slide.classList.toggle("active", i === currentIndex); // Aktif slayta "active" sınıfı eklenir
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex); // Seçili slayta ait nokta işaretlenir
    });
}


// Sağ (❯) ve Sol (❮) düğmelerini kontrol et
document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
});

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Noktalara tıklanınca çalışacak
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

// 5 saniyede bir otomatik geçiş
setInterval(nextSlide, 5000);


