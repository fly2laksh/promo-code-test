// Diwali Special GIF Preloader Logic
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.style.opacity = '0'; // Fade out animation
        setTimeout(function() {
            preloader.style.display = 'none'; // Background se poori tarah hatayein
        }, 800);
    }
}

// 1. Jab page aur images fully load ho jayein
window.addEventListener('load', function() {
    setTimeout(hidePreloader, 2500); // 2.5 seconds baad preloader hide hoga
});

// 2. Safety Fallback: Agar kisi reason se 'load' event slow ho, toh max 4 seconds me GIF automatic hat jaye
setTimeout(hidePreloader, 4000);
