export default function template() {
    let html = `
        <div class="col-lg-4 col-xl-3 mb-3 product-holder">
                <div class="product-img-holder">
                <a class="product-view" href="#" data-colection="{{colection}}">
                    <img src="img/{{imgSrc}}.jpg" alt="{{productTitle}}" class="img-fluid product-img">
                </a>
                <div class="bottom-holder">
                    <a href="#"><img src="img/shop-icon.png"></a>
                    <a class="product-view" href="#" data-colection="{{colection}}"><img src="img/view-icon.png"></a>
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
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!-- Main CSS -->
        <link rel="stylesheet" href="main.css">
    
        <title>E-shop | Product View</title>
    </head>
    
    <body>
    
        <!-- Main Header -->
        <header id="top">
            <!-- Top Bar -->
            <div class="container py-2">
                <div class="d-flex justify-content-between">
                    <a href="#">+381 11 555 555 555</a>
                    <a href="#">Prijavi se</a>
                </div>
            </div>
            <!-- Top Bar END -->
            <!-- Nav Bar -->
            <div class="navbar-holder">
                <div class="container">
                    <div class="d-flex flex-md-row">
                        <form class="order-2 d-flex my-5 mt-md-0 mt-lg-4 align-self-start">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="">
                                <a href="#">
                                    <div class="input-group-append">
                                        <span class="input-group-text"></span>
                                    </div>
                                </a>
                                <a href="#">
                                    <span class="shop-icon ml-sm-3">
                                        <img src="img/shopping-bag-icon-png-4-transparent.png" alt="Shop">
                                        <span class="shop-icon-buble">2</span>
                                    </span>
                                </a>
                            </div>
                        </form>
    
                        <nav class="navbar navbar-expand-md px-0 py-5 order-1">
                            <button class="navbar-toggler pl-0" type="button" data-toggle="collapse"
                                data-target="#navigator" aria-controls="navigator" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <h1 class="d-flex mb-0"><a class="navbar-brand" href="index.html"><img src="img/logo.png"
                                        alt="Logo"></a>
                            </h1>
    
                            <div class="collapse navbar-collapse" id="navigator">
    
                                <ul class="navbar-nav ml-sm-auto mr-lg-5 text-center">
                                    <li class="nav-item active">
                                        <a class="nav-link px-0 mx-2 active-link" href="#">Naslovna<span
                                                class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  px-0 mx-2" href="#">Prodavnica</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  px-0 mx-2" href="#">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  px-0 mx-2" href="#">O nama</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  px-0 mx-2" href="#">Kontakt</a>
                                    </li>
                                </ul>
    
                            </div>
                        </nav>
    
    
    
    
                    </div>
    
                </div>
    
            </div>
            <!-- Nav Bar END -->
        </header> <!-- Main Header END -->
    
        <main class="pb-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="back-link d-flex">
                            <img class="bck-img" src="img/arrow-left.png" alt="Arrow back">
                            <a href="#">Back Link</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img class="img-fluid d-block mx-auto" src="img/product1.jpg" alt="Zenska majica">
                    </div>
                    <div class="col-12 col-md-6">
                        <h3 class="pt-5 pb-3 pt-md-0">Zenska majica Cosmos</h3>
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
                                <p class="price">2,900 RSD</p>
                                <p>Besplatna</p>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- End of descrition-holder -->
                        <button class="btn btn-block btn-success mt-3">Ubaci u korpu</button>
                    </div>
                </div>
    
    
            </div> <!-- End of Container -->
            <div class="container">
                <div class="row">
                    <h1 class="separately-title">Izdvajamo</h1>
                </div>
                <div id="separately" class="row">
    
                </div>
            </div>
        </main>
    
    
        <footer>
            <div class="top-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 ">
                            <div class="footer-title-holder">
                                <h1>SHOP</h1>
                                <p class="footer-title-text text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. Quas,
                                    delectus vel.
                                    Sed, nemo? Labore earum reiciendis cupiditate dolor illo dicta quidem eaque
                                    exercitationem obcaecati
                                    adipisci ex nesciunt voluptatibus, doloribus numquam!</p>
                                <p>stefan1811991@gmail.com</p>
                                <p>+38164333666999</p>
                                <p>Jagodina, Knjeginje Milice 6/1</p>
                            </div>
                        </div>
                        <div class="d-none d-md-block col-md-2 offset-md-1 mt-5">
                            <h4 class="mb-3">KORISNICI</h4>
                            <ul class="list-unstyled">
                                <li class="list-item">
                                    <a href="" class="">Moj nalog</a>
                                </li>
                                <li class="list-item">
                                    <a href="" class="">Kako kupiti</a>
                                </li>
                                <li class="list-item">
                                    <a href="" class="">Vodic</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-none d-md-block col-md-4 offset-md-1 mt-5">
                            <div class="footer-tags">
                                <h4 class="mb-3">TAGOVI</h5>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Jakne</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Sportaska oprema</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Jakne</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Zimska kolekcija</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Haljine</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Majice</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Pantalone</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="tag-link mb-2">Kaputi</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div> <!-- End od ROW -->
                </div> <!-- End of container -->
            </div> <!-- End of top-footer -->
            <div class="bottom-footer py-4">
                <div class="container">
                    <div class="row align-items-center flex-column flex-md-row justify-content-md-between">
                        <div class="bottom-footer-links">
                            <ul class="list-inline ml-3 mb-0 d-flex align-items-center">
                                <li class="list-inline-item">
                                    <a href="#"><img src="img/krojacevaskola.png" class="bottom-links-img"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><img src="img/facebook.png" class="bottom-links-img"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><img src="img/twitter.png" class="bottom-links-img"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><img src="img/instagram.png" class="bottom-links-img"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><img src="img/youtube.png" class="bottom-links-img"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="bottom-footer-menu">
                            <ul class="list-inline mb-0 d-flex flex-column align-items-center mt-3 mt-md-0 flex-md-row">
                                <li class="list-inline-item"><a class="bottom-menu-link" href="#">O Nama</a></li>
                                <li class="list-inline-item"><a class="bottom-menu-link" href="#">Uslovi korscenja</a></li>
                                <li class="list-inline-item"><a class="bottom-menu-link" href="#">Novosti</a></li>
                                <li class="list-inline-item"><a class="bottom-menu-link" href="#">Kontakt</a></li>
                            </ul>
                        </div>
                        <a class="jump-to-top" href="#top"></a>
                    </div>
                </div>
            </div>
        </footer>
    </body>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    <script type="module" src="product.js"></script>
    
    </html>
    `;
    return html;
}