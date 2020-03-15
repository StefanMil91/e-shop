const topJumper = document.querySelector('.jump-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1500) {
        topJumper.style.display = 'block';
    } else {
        topJumper.style.display = 'none';
    }
});

async function getData() {
    let data = await fetch('shop.json')
        .then(res => res.json())
        .then(data => data);
    console.log(data);

}

getData();