var nav= document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 650) {
      nav.classList.add('sticky','shadow-sm');
    } else {
      nav.classList.remove('sticky','shadow-sm');
    }
  });