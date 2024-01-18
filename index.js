window.addEventListener('DOMContentLoaded', () => {
  function loader() {
    const load = document.querySelector('.loader')
    setTimeout(() => load.style.display = 'none', 2200)
  }
  loader()

  const container = document.querySelector('.carousel__container');
  let scrollAmount = 0;

  document.querySelector('.carousel__button--right').addEventListener('click', () => {
    container.scrollLeft += 200;
  }, 2000);


  function autoCarusel() {
    return container.scrollLeft += 200;
  }
  setInterval(() => {
    if (container.scrollLeft == 0) {
      clearInterval(autoCarusel)
      container.scrollLeft -= 200;
    } else {
      autoCarusel()
    }
  }, 2000);

  setInterval(() => {
    autoCarusel()
  }, 3000)

  document.querySelector('.carousel__button--left').addEventListener('click', () => {
    container.scrollLeft -= 200;
  });


})



