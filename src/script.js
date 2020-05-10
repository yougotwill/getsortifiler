document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('#js-nav-toggle');
  const body = document.querySelector('body');
  const nav = document.querySelector('#js-nav');
  const navItems = document.querySelector('#js-nav-items');
  const btnHamburger = document.querySelector('#btn-hamburger');
  const btnClose = document.querySelector('#btn-close');

  const closeNavMenu = function () {
    btnHamburger.classList.toggle('hidden');
    btnClose.classList.toggle('hidden');
    nav.classList.toggle('nav-mobile');
    body.classList.toggle('overflow-y-hidden');
  };

  navToggle.addEventListener('click', function () {
    closeNavMenu();
  });

  navItems.addEventListener('click', function (event) {
    if (!nav.classList.contains('nav-mobile')) {
      return;
    }
    if (event.target.tagName === 'UL') {
      return;
    }
    closeNavMenu();
    console.log('closed nav menu');
  });
});
