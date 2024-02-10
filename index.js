window.addEventListener('DOMContentLoaded', () => {

  // -----===== responsive nav ===------ //
  var toggleButton = document.querySelector('.nav-toggle-button');
  var navTop = document.querySelector('.nav__top');
  var navBottom = document.querySelector('.nav__bottom');

  toggleButton.addEventListener('click', function () {
    navTop.classList.toggle('active');
    navBottom.classList.toggle('active');
    toggleButton.querySelector('.fa-bars').classList.toggle('hide');
    toggleButton.querySelector('.fa-times').classList.toggle('hide');
  });
  // -----===== responsive nav ===------ //


  // -------===== lodaer ====------ //
  function loader() {
    const load = document.querySelector('.loader')
    setTimeout(() => load.style.display = 'none', 2200)
  }
  loader()
  // -------===== lodaer ====------ //



  // ---------------------- second carusel -----------------------

  const container = document.querySelector('.carousel__container');
  let scrollAmount = 0;

  document.querySelector('.carousel__button--right').addEventListener('click', () => {
    container.scrollLeft += 200;
  }, 2000);

  document.querySelector('.carousel__button--left').addEventListener('click', () => {
    container.scrollLeft -= 200;
  });

  function autoCarousel() {
    const carousel = document.querySelector('.carousel__container');
    let scrollAmount = 0;

    const step = 200;
    const intervalTime = 4000;
    const smoothScrollTime = 200;

    carousel.style.scrollBehavior = 'smooth';

    const interval = setInterval(() => {
      if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft += step;
        scrollAmount += step;
      } else {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = 0;
        scrollAmount = 0;
        setTimeout(() => {
          carousel.style.scrollBehavior = 'smooth';
        }, smoothScrollTime);
      }
    }, intervalTime);
  }

  autoCarousel();

  //----------------- next carousel ------------------------

  function headerAutoslide() {
    head = document.querySelector('.header__carusell');

    let scrollAmount = 0;

    const step = 200;
    const intervalTime = 4000;
    const smoothScrollTime = 200;

    const interval = setInterval(() => {
      document.querySelector('.head-carousel_right_button--').addEventListener('click', () => {
        let img = document.querySelector('.head-carousel_right_button--')
        header.scrollLeft += header.clientWidth;
      }, 2000);

      document.querySelector('.head-carousel__button--left').addEventListener('click', () => {
        container.scrollLeft -= 200;
      });
    }, intervalTime);
  }

  function getCard() {
    fetch('https://texnomartapi.pythonanywhere.com/api/api/cards/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Xato:', error);
        console.log("salom");
      });
  }
  getCard()
})



