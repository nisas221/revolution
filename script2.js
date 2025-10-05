// Typing Effect
const typingText = document.getElementById('typing-text');
const texts = [
    "Selamat Datang di Blog Pribadi Saya",
    "Tempat Berbagi Pengalaman dan Cerita",
    "Mari Jelajahi Dua Pengalaman Berharga Saya"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 1500;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // Menghapus teks
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = deletingSpeed;
    } else {
        // Mengetik teks
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    // Jika selesai mengetik
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseTime;
    } 
    // Jika selesai menghapus
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(type, typingSpeed);
}

// Animasi Scroll
const animateOnScroll = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
    animateOnScroll.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.animationPlayState = 'running';
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mulai efek mengetik
    setTimeout(type, 1000);
    
    // Cek scroll untuk animasi
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Cek saat halaman pertama kali dimuat
});
