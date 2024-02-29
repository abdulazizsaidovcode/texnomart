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


function getProduct() {
    let head = document.getElementsByClassName("product-head")
    fetch('http://localhost:3000/product')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.map(item => {
                head[0].innerHTML = `
            <div class="product__card">
                <div class="product__rate">
                    <div><i class="fa-solid fa-heart"></i></div>
                    <div><i class="fa-solid fa-scale-unbalanced-flip"></i></div>
                </div>
                <div><img
                        src="${item.url}"
                        alt=""></div>
                <div class="product__discribtion">
                    <p class="product__title">Стиральная машина Hisense WFQP9014EVM </p>
                    <div class="product__stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i></div>
                    <div class="product__rasrochka">
                        <p>от 68 982 сум / 24 мес.</p>
                    </div>
                    <div class="product__price">
                        <div>
                            <p>989 000 </p><span>сум</span>
                        </div>
                        <div class="product__shopping"><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
            </div>
            `;
            });

        }).catch(error => {
            console.error('Xato:', error);
        })
}

getProduct()