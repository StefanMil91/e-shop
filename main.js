import template from "./templates.js";
import clearMainView from "./productView.js";

const DOM = {
    topJumper: document.querySelector('.jump-to-top'),
    productHolder: document.querySelector('#main-row'),
    dataColections: document.querySelectorAll('[data-colection]'),
    introSection: document.querySelector('#main-intro-section'),
    carousel: document.querySelector('#carousel'),
    pickerColection: document.querySelector('#colection-picker'),
    maleFemaleSection: document.querySelector('#male-female-section'),
    productView: undefined
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
    const titleRegEx = new RegExp(/{{productTitle}}/g);
    const colectionRegEx = new RegExp(/{{colection}}/g);
    let html = '';
    data.forEach(curr => {
        html = temp.replace("{{imgSrc}}", curr.imgSrc)
            .replace(titleRegEx, curr.productTitle)
            .replace("{{model}}", curr.model)
            .replace("{{price}}", curr.price)
            .replace(colectionRegEx, curr.colection);
        DOM.productHolder.innerHTML += html;
    });
    // Add events listener for products view
    DOM.productView = document.querySelectorAll('.product-view')
    DOM.productView.forEach(curr => {
        curr.addEventListener('click', prepareView);
    })
}

function makeCollection(e) {
    e.preventDefault();
    let pickedCol = this.getAttribute('data-colection');
    //console.log();

    DOM.dataColections.forEach((curr) => {
        curr.classList.remove('active-product-link');
    })
    if (pickedCol === "newCol") {
        this.classList.add('active-product-link')
    } else if (pickedCol === "popular") {
        this.classList.add('active-product-link')
    } else if (pickedCol === "action") {
        this.classList.add('active-product-link')
    }

    function checkColection(curr) {
        return curr.colection === pickedCol || curr[pickedCol];
    }
    let newCol = state.data.filter(checkColection);
    //console.log(newCol);
    replaceData(newCol, template());

}

function clearView(parent) {
    parent.innerHTML = "";
}
// Make product view 

function prepareView(e) {
    e.preventDefault();
    clearMainView([DOM.introSection, DOM.carousel, DOM.maleFemaleSection, DOM.pickerColection]);
    clearView(DOM.productHolder);
    console.log(this);

}




// Event listeners and functions

getData();
DOM.dataColections.forEach(curr => curr.addEventListener('click', makeCollection));