console.log('JS OK!');

let dropMenu = document.querySelector('.header-right > a');
let closeMenu = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger-menu');


/* prima versione 
dropMenu.addEventListener('click', function () {
    hamburger.style.display = 'block';
}
);

closeMenu.addEventListener('click', function () {
    hamburger.style.display = "none";
}
);
*/

// seconda versione 

dropMenu.addEventListener('click', function () {
    hamburger.classList.add('active');
}
);

closeMenu.addEventListener('click', function () {
    hamburger.classList.remove('active');
}
);