const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');
const mainNav = document.querySelector('.header__nav');

hamburger.addEventListener('click', hamburgerAction);
navItem.forEach((btn) => btn.addEventListener('click', hamburgerAction));

function hamburgerAction(e) {
  setTimeout(() => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  }, 0);
}

// Sticky navigation

const header = document.querySelector('.header');
const navHeight = mainNav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) mainNav.classList.add('nav__fixed');
  else mainNav.classList.remove('nav__fixed');
};

// create the observer

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
  // 90 is the height of the nav
});
headerObserver.observe(header);
