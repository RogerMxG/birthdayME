function launchConfetti() {
    var duration = 5000;
    var end = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 5,
            spread: 160,
            origin: { y: 0.6 }
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startVideo() {
    document.getElementById('permissionModal').style.display = 'none';
    document.getElementById('videoOverlay').style.display = 'flex';
    var video = document.getElementById('introVideo');
    video.play();
}

document.getElementById('introVideo').addEventListener('ended', function() {
    document.getElementById('videoOverlay').style.display = 'none';
    document.getElementById('backgroundMusic').play();
    launchConfetti();
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});