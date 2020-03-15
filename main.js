const topJumper = document.querySelector('.jump-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1500) {
        topJumper.style.display = 'block';
    } else {
        topJumper.style.display = 'none';
    }
});