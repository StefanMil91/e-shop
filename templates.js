export function template() {
    let html = `
        <div class="col-lg-4 col-xl-3 mb-3 product-holder">
                <div class="product-img-holder">
                <a class="product-view" href="#" data-colection="{{colection}}" data-id="{{id}}">
                    <img src="img/{{imgSrc}}.jpg" alt="{{productTitle}}" class="img-fluid product-img">
                </a>
                <div class="bottom-holder">
                    <a href="#"><img src="img/shop-icon.png"></a>
                    <a class="product-view" href="#" data-colection="{{colection}}" data-id="{{id}}"><img src="img/view-icon.png"></a>
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

export function template1() {
    let html = `
    
        <main class="pb-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="back-link d-inline-block" id="bck-link">
                            <img class="bck-img" src="img/arrow-left.png" alt="Arrow back">
                            <a href="#" >Back</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img class="img-fluid d-block mx-auto" src="img/{{imgSrc}}.jpg" alt="{{productTitle}}">
                    </div>
                    <div class="col-12 col-md-6">
                        <h3 class="pt-5 pb-3 pt-md-0">{{productTitle}} {{model}}</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quis alias
                            qui delectus provident. Aperiam quisquam inventore asperiores accusamus saepe dignissimos
                            similique, sit doloribus nostrum, voluptatem corrupti quis laboriosam nulla?</p>
                        <div class="description-holder d-flex justify-content-between">
                            <div class="des-title d-flex flex-column">
                                <p>Boja:</p>
                                <p>Cena:</p>
                                <p>Dostava:</p>
                                <p>Kolicina:</p>
                            </div>
                            <div class="des-data d-flex flex-column align-items-end align-items-md-start">
                                <div class="color-picker ml-0">
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
                                <p class="price">{{price}} RSD</p>
                                <p>Besplatna</p>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- End of descrition-holder -->
                        <button class="btn btn-block btn-success mt-3">Ubaci u korpu</button>
                    </div>
                </div>
    
    
            </div> <!-- End of Container -->
            <div class="container">
                <div class="row justify-content-center pt-5">
                    <h1 class="separately-title">Izdvajamo</h1>
                </div>
                <div id="separately" class="row">
                </div>
            </div>
        </main>
    
    `;
    return html;
}

export function template2() {
    let html = `
        <div class="col-lg-4 col-xl-3 mb-3 product-holder">
                <div class="product-img-holder">
                <a class="product-view" href="#" data-colection="{{colection}}" data-id="{{id}}">
                    <img src="img/{{imgSrc}}.jpg" alt="{{productTitle}}" class="img-fluid product-img">
                </a>
                <div class="bottom-holder">
                    <a href="#"><img src="img/shop-icon.png"></a>
                    <a class="product-view" href="#" data-colection="{{colection}}" data-id="{{id}}"><img src="img/view-icon.png"></a>
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
            </div> <!-- End od product-holder and col-classes -->
        `;
    return html;
}