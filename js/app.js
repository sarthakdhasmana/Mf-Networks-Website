//>>>>>>>>>HAMBURGER MENU ANIMATION>>>>>>>>>>>
let hamburger = document.querySelector('.hamburger');
let mobNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobNav.classList.toggle('is-active');
})


//>>>>>>>>>HERO SECTION CONSOLE ANIMATION>>>>>>>>>>>
let consoleArea = document.querySelector('.hero__section-right');
let gameConsoler = document.querySelector('.console');

//when mouse enters the area
consoleArea.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    gameConsoler.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})

//animation for consolebtns
consoleArea.addEventListener('mouseenter', e => {
    gameConsoler.style.transition = 'none';
})

//animation for consolebtns
consoleArea.addEventListener('mouseleave', e => {
    gameConsoler.style.transform = 'rotateX(0deg) rotateY(0deg)';
    gameConsoler.style.transition = 'all 0.7s ease';
})


//>>>>>>>>>Partner SECTION Carousel>>>>>>>>>>>
let moveNext = document.querySelector('.carousel-btn-next');
let movePrev = document.querySelector('.carousel-btn-prev');
let partner = document.querySelector('.partner-list');
let partnerpng = Array.from(partner.children);
let slideWidth = partnerpng[0].getBoundingClientRect().width;


// let partner;
let width = 0;
for (let i = 0; i < 4; i++) {
    width += partnerpng[i].getBoundingClientRect().width;
}
console.log(width);
