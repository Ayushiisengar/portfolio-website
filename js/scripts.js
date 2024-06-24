document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    startTransition('aboutme.html');
});

function startTransition(url) {
    const container = document.getElementById('transition-container');
    container.style.display = 'block';

    const strips = document.querySelectorAll('.strip');
    let stripCount = 0;

    strips.forEach((strip, index) => {
        strip.addEventListener('animationend', () => {
            stripCount++;
            if (stripCount === strips.length) {
                window.location.href = url;
            }
        });
    });
}
document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    startTransition('contactme.html');
});

function startTransition(url) {
    const container = document.getElementById('transition-container');
    container.style.display = 'block';

    const strips = document.querySelectorAll('.strip');
    let stripCount = 0;

    strips.forEach((strip, index) => {
        strip.addEventListener('animationend', () => {
            stripCount++;
            if (stripCount === strips.length) {
                window.location.href = url;
            }
        });
    });
}

