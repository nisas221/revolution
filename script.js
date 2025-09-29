// Animasi Typing Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Setelah selesai, tambahkan kelas untuk kursor berkedip
            element.classList.add('typing');
        }
    }
    
    type();
}

// Animasi Scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.animationPlayState = 'running';
            element.classList.add('animated');
        }
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    typeWriter(typingText, "Selamat Datang di Blog Pribadi Saya", 80);
    
    // Trigger animasi scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Jalankan sekali saat halaman dimuat
    setTimeout(animateOnScroll, 500);
});