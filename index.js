// window.addEventListener('DOMContentLoaded', () => {

//   // -----===== responsive nav ===------ //
//   var toggleButton = document.querySelector('.nav-toggle-button');
//   var navTop = document.querySelector('.nav__top');
//   var navBottom = document.querySelector('.nav__bottom');

//   toggleButton.addEventListener('click', function () {
//     navTop.classList.toggle('active');
//     navBottom.classList.toggle('active');
//     toggleButton.querySelector('.fa-bars').classList.toggle('hide');
//     toggleButton.querySelector('.fa-times').classList.toggle('hide');
//   });
//   // -----===== responsive nav ===------ //


//   // -------===== lodaer ====------ //
//   function loader() {
//     const load = document.querySelector('.loader')
//     setTimeout(() => load.style.display = 'none', 2200)
//   }
//   loader()
//   // -------===== lodaer ====------ //



//   // ---------------------- second carusel -----------------------

//   const container = document.querySelector('.carousel__container');
//   let scrollAmount = 0;

//   document.querySelector('.carousel__button--right').addEventListener('click', () => {
//     container.scrollLeft += 200;
//   }, 2000);

//   document.querySelector('.carousel__button--left').addEventListener('click', () => {
//     container.scrollLeft -= 200;
//   });

//   function autoCarousel() {
//     const carousel = document.querySelector('.carousel__container');
//     let scrollAmount = 0;

//     const step = 200;
//     const intervalTime = 4000;
//     const smoothScrollTime = 200;

//     carousel.style.scrollBehavior = 'smooth';

//     const interval = setInterval(() => {
//       if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
//         carousel.scrollLeft += step;
//         scrollAmount += step;
//       } else {
//         carousel.style.scrollBehavior = 'auto';
//         carousel.scrollLeft = 0;
//         scrollAmount = 0;
//         setTimeout(() => {
//           carousel.style.scrollBehavior = 'smooth';
//         }, smoothScrollTime);
//       }
//     }, intervalTime);
//   }

//   autoCarousel();

//   //----------------- next carousel ------------------------

//   function headerAutoslide() {
//     head = document.querySelector('.header__carusell');

//     let scrollAmount = 0;

//     const step = 200;
//     const intervalTime = 4000;
//     const smoothScrollTime = 200;

//     const interval = setInterval(() => {
//       document.querySelector('.head-carousel_right_button--').addEventListener('click', () => {
//         let img = document.querySelector('.head-carousel_right_button--')
//         header.scrollLeft += header.clientWidth;
//       }, 2000);

//       document.querySelector('.head-carousel__button--left').addEventListener('click', () => {
//         container.scrollLeft -= 200;
//       });
//     }, intervalTime);
//   }
//   function getCard() {
//     fetch('https://texnomartapi.pythonanywhere.com/api/api/cards/')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Xato:', error);
//         console.log("Cardlarni back end dan olib kelish da hatolik bor");
//       });
//   }
//   getCard()
// })




// let id = 0

 // `+ "<div onclick='addTowishes(" + (item.id, item.wishes) + ")><i class="+ (heart) +"></i></div>" + `


function getProduct() {
    let cals = "product__shopping cart-btn "
    let icon = "fa-solid fa-cart-shopping"
    let heart = 'fa-solid fa-heart'
    let head = document.getElementsByClassName("product-head");
    fetch('http://localhost:3000/product')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let content = '';
            data.splice(0, 5).map(item => {
                content += `
            <div class="product__card">
                <div class="product__rate">
                    <div><i class="fa-solid fa-scale-unbalanced-flip"></i></div>
                </div>
                <div><img
                        src="http://localhost:3000/${item.url}"
                        alt=""></div>
                <div class="product__discribtion">
                    <p class="product__title">${item.describtion} </p>
                    <div class="product__stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i></div>
                    <div class="product__rasrochka">
                        <p>от ${item.monthpay} сум / 24 мес.</p>
                    </div>
                    <div class="product__price">
                        <div>
                            <p>${item.price} </p><span>сум</span>
                        </div>
                         `+  "<div onclick='addToCart(" + (item.id, item.cart) + ")' class=" + (cals) + "><i class=" + (icon) + "></i></div> " + `
                    </div>
                </div>
            </div>
            `;
            });
            head[0].innerHTML = content;
        }).catch(error => {
            console.error('Xato:', error);
        });

}

function addToCart(id , cart) {

    const data = {
        cart: !cart,
    };

    fetch(`http://localhost:3000/product/${id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data) 
    })
    .then((response) => response.json()) 
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Xato:', error); 
    });
}
function addTowishes(id ,wishes) {

    const data = {
        wishes: !wishes,
    };

    fetch(`http://localhost:3000/product/${id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data) 
    })
    .then((response) => response.json()) 
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Xato:', error); 
    });
}


getProduct();
