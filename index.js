window.addEventListener('DOMContentLoaded', () => {
  function loader() {
    const load = document.querySelector('.loader')
    setTimeout(() => load.style.display = 'none', 2200)
  }
  loader()

})
