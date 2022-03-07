console.log('JS OK!');

let dropMenu = document.querySelector('.header-right');
let closeMenu = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger-menu');

dropMenu.addEventListener('click', function () {
    hamburger.classList.add('active');
}
);

closeMenu.addEventListener('click', function () {
    hamburger.classList.remove('active');
}
);