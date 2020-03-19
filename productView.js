export function clearMainView([...rst]) {
    //console.log(rst);
    rst.forEach((curr) => {
        curr.style.display = "none";
    })
}
export function showMainView([...rst]) {
    //console.log(rst);
    rst.forEach((curr) => {
        curr.style.display = "flex";
    })
}

export function replaceProductData(temp, product, parent, separatelyHTML) {
    let html = temp;
    let productTitleRegEx = new RegExp(/{{productTitle}}/g);

    html = temp.replace(productTitleRegEx, product.productTitle)
        .replace("{{imgSrc}}", product.imgSrc)
        .replace("{{price}}", product.price)
        .replace("{{model}}", product.model);


    parent.innerHTML = html;
    document.querySelector('#separately').innerHTML = separatelyHTML;

}
export function replaceSeparatelyData(data, temp) {
    let html = '';
    let productTitleRegEx = new RegExp(/{{productTitle}}/g);
    let colectionRegEx = new RegExp(/{{colection}}/g);
    let idRegEx = new RegExp(/{{id}}/g);

    data.forEach(curr => {
        let currHTML = temp.replace(colectionRegEx, curr.colection)
            .replace(productTitleRegEx, curr.productTitle)
            .replace(idRegEx, curr.id)
            .replace("{{imgSrc}}", curr.imgSrc)
            .replace("{{price}}", curr.price)
            .replace("{{model}}", curr.model);
        html += currHTML;
    })

    return html;
}