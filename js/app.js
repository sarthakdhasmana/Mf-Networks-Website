//>>>>>>>>>HAMBURGER MENU ANIMATION>>>>>>>>>>>
let hamburger = document.querySelector('.hamburger');
let hambar = document.querySelector('.bar');
let navlst = document.querySelector('.block');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    hambar.classList.toggle('is-acitve');
    navlst.classList.toggle('block');
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
let sum = 0;
// let sum_i =
//width of single logoPng
let slideWidth = partnerpng[0].getBoundingClientRect().width;

// for (let i = 0; i < 4; i++) {
//     let sumfour = partnerpng[i].getBoundingClientRect().width;
//     console.log(sumfour);
// }

for (let i = 0; i < 4; i++) {
    let sum = 0;
    sum = sum + partnerpng[i].getBoundingClientRect().width;
}

let sumfour = partnerpng[0].getBoundingClientRect().width + partnerpng[1].getBoundingClientRect().width + partnerpng[2].getBoundingClientRect().width + partnerpng[3].getBoundingClientRect().width;
console.log(sumfour);