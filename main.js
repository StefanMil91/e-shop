import {
    template,
    template1,
    template2
} from "./templates.js";
import {
    clearMainView,
    replaceProductData,
    replaceSeparatelyData,
    showMainView
} from "./productView.js";

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
    data: undefined,
    previousColection: "default"
}


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1500) {
        DOM.topJumper.style.display = 'block';
    } else {
        DOM.topJumper.style.display = 'none';
    }
});

async function getData() {
    // Get data and add to state
    state.data = await fetch('shop.json')
        .then(res => res.json())
        .then(data => data);
    // Put unique id in json data
    state.data.forEach((curr, index) => {
        curr.id = index;
    })
    //console.log(state.data);
    let tmp = template();
    replaceData(state.data, tmp);

}

function replaceData(data, temp) {
    clearView(DOM.productHolder);
    const titleRegEx = new RegExp(/{{productTitle}}/g);
    const colectionRegEx = new RegExp(/{{colection}}/g);
    const idRegEx = new RegExp(/{{id}}/g);

    let html = '';
    data.forEach((curr) => {
        html = temp.replace("{{imgSrc}}", curr.imgSrc)
            .replace(titleRegEx, curr.productTitle)
            .replace("{{model}}", curr.model)
            .replace("{{price}}", curr.price)
            .replace(colectionRegEx, curr.colection)
            .replace(idRegEx, curr.id);
        DOM.productHolder.innerHTML += html;
    });
    // Add events listener for all product view
    DOM.productView = document.querySelectorAll('.product-view');
    DOM.productView.forEach(curr => {
        curr.addEventListener('click', createProductView);
    });
}

function makeCollection(e) {
    e.preventDefault();
    let pickedCol = this.getAttribute('data-colection');
    state.previousColection = pickedCol;

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

function randomizeArr(arr) {
    let tempArr = [].concat(arr);

    for (let i = tempArr.length - 1; i > 0; i--) {
        let rndmNum = Math.floor(Math.random() * (i + 1));
        let tempVal = tempArr[i];
        tempArr[i] = tempArr[rndmNum];
        tempArr[rndmNum] = tempVal;
    }
    return tempArr;

}

function createProductView(e) {
    e.preventDefault();

    let templ2 = template2();
    let templ1 = template1();
    // Clear view
    clearMainView([DOM.introSection, DOM.carousel, DOM.maleFemaleSection, DOM.pickerColection]); // clear other unnecessery elements
    clearView(DOM.productHolder); // clear container with products

    let colForSeparately = this.getAttribute('data-colection');
    let currId = parseInt(this.getAttribute('data-id'));
    let currProduct = state.data[currId];

    // Filtrate data for separately section
    function separatelyFilter(curr) {
        return curr.colection === colForSeparately;
    }
    // Slice curr product
    let tempStateData = [].concat(state.data);
    tempStateData.splice(currId, 1);

    // Filter picked colection and randomized arr
    let sepColArr = tempStateData.filter(separatelyFilter);
    let randomArrForSepSection = randomizeArr(sepColArr).slice(0, 4);

    // Replace separately product and create HTML
    let separatelyHTML = replaceSeparatelyData(randomArrForSepSection, templ2);

    // Replace product data template and put in view
    replaceProductData(templ1, currProduct, DOM.productHolder, separatelyHTML);

    // Add events for back link from product view
    DOM.backLink = document.querySelector('#bck-link');
    DOM.backLink.addEventListener('click', function (e) {
        e.preventDefault();
        clearView(DOM.productHolder);
        showMainView([DOM.introSection, DOM.carousel, DOM.maleFemaleSection, DOM.pickerColection]);
        console.log(state.previousColection);
        // Odavde nastavi, popuni main-row(DOM.productHolder) sa productima iz prethodne izabrane kolekcije
    })
}



// Event listeners and functions

getData();
DOM.dataColections.forEach(curr => curr.addEventListener('click', makeCollection));