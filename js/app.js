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

// Mouse leave animation for the card--Spec Card
let specard = document.querySelector('.card1');
let specard_ = document.querySelector('.card2');
let specard__ = document.querySelector('.card3');
specard.addEventListener('mouseleave', e => {
    specard.style.transition = 'all 0.5s ease';
    specard_.style.transition = 'all 0.5s ease';
    specard__.style.transition = 'all 0.5s ease';
})

// Animation for the Game Card
let projContainer = document.querySelector('.project');
let projCard = document.querySelector('.project_card');
let projText = document.querySelector('.project-dec');
let projImg = document.querySelector('.project-img');

projContainer.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageX) / 50;

    projCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})
projCard.addEventListener('mouseenter', e => {
    projCard.style.transition = 'none';
    projText.style.transform = 'translateZ(50px)';
    projImg.style.transform = 'translateZ(50px)';
})
projContainer.addEventListener('mouseleave', e => {
    projCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    projCard.style.transition = 'all 0.5s ease';
    projText.style.transform = 'translateZ(0px)';
    projImg.style.transform = 'translateZ(0px)';
})

//Carousel for Projects
let movePrev = document.querySelector('.prev-project');
let moveNext = document.querySelector('.next-project');
let currentSlide = document.querySelector('.current-slide');
let list = document.querySelector('.projects-list');
let slides = Array.from(list.children);
console.log(slides)
let nextSlide = currentSlide.nextSibling;

//move to left when i click
moveNext.addEventListener('click', e => {
    moveWidth = currentSlide.getBoundingClientRect().width + 'px';
    currentSlide.style.transform = `translateX(-${moveWidth})`;
    currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide');
})