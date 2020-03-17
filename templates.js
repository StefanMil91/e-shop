export default function template() {
    let html = `
        <div class="col-lg-4 col-xl-3 mb-3 product-holder">
                <div class="product-img-holder">
                <a href="#">
                    <img src="img/{{imgSrc}}.jpg" alt="{{productTitle}}" class="img-fluid product-img">
                </a>
                <div class="bottom-holder">
                    <a href="#"><img src="img/shop-icon.png"></a>
                    <a href="#"><img src="img/view-icon.png"></a>
                    <a href="#"><img src="img/like-icon.png"></a>
                </div>
                </a>
                </div>
                <div class="product-title d-flex justify-content-around mt-3 mb-1">
                <div class="pr-title">
                    <p>{{productTitle}}</p>
                    <p>{{model}}</p>
                </div>
                <h6>{{price}} RSD</h6>
                </div>
                <div class="color-picker">
                <ul class="list-inline">
                    <li class="list-inline-item mr-1">
                    <a href="" class="color-box purple"></a>
                    </li>
                    <li class="list-inline-item mr-1">
                    <a href="#" class="color-box green"></a>
                    </li>
                    <li class="list-inline-item mr-1">
                    <a href="#" class="color-box dark-gray"></a>
                    </li>

                </ul>
                </div>
            </div> <!-- End od product-holder and col-classes -->
        `;
    return html;
}