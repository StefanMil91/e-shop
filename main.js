import template from "./templates.js";

const DOM = {
    topJumper: document.querySelector('.jump-to-top'),
    productHolder: document.querySelector('#main-row'),
    dataColections: document.querySelectorAll('[data-colection]')
}

const state = {
    data: undefined
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1500) {
        DOM.topJumper.style.display = 'block';
    } else {
        DOM.topJumper.style.display = 'none';
    }
});

async function getData() {
    state.data = await fetch('shop.json')
        .then(res => res.json())
        .then(data => data);
    //console.log(state.data);
    let tmp = template();
    replaceData(state.data, tmp);
}

function replaceData(data, temp) {
    clearView(DOM.productHolder);
    const titleRegEx = new RegExp(/{{productTitle}}/g)
    let html = '';
    data.forEach(curr => {
        html = temp.replace("{{imgSrc}}", curr.imgSrc)
            .replace(titleRegEx, curr.productTitle)
            .replace("{{model}}", curr.model)
            .replace("{{price}}", curr.price);
        DOM.productHolder.innerHTML += html;
    });

}

function makeCollection(e) {
    e.preventDefault();
    let pickedCol = this.getAttribute('data-colection');
    console.log(pickedCol);

    function checkColection(curr) {
        return curr.colection === pickedCol || curr[pickedCol];
    }
    let newCol = state.data.filter(checkColection);
    console.log(newCol);
    replaceData(newCol, template());

}

function clearView(parent) {
    parent.innerHTML = "";
}

// Event listeners and functions

getData();


DOM.dataColections.forEach(curr => curr.addEventListener('click', makeCollection));