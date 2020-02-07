document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('#js-nav-toggle');
  const body = document.querySelector('body');
  const nav = document.querySelector("#js-nav");
  const btnHamburger = document.querySelector('#btn-hamburger');
  const btnClose = document.querySelector('#btn-close');
  navToggle.addEventListener('click', function () {
    btnHamburger.classList.toggle('hidden');
    btnClose.classList.toggle('hidden');
    body.classList.toggle('overflow-y-hidden');
    nav.classList.toggle('nav-mobile');
  });
});
