let navButton = document.querySelector('.navbar-toggler');
let arrows = document.querySelectorAll('.arrows a'),
    slides = document.querySelectorAll('.slides div'),
    numOfSlides = slides.length,
    currentSlide = 1;
// let services = document.querySelectorAll('.service'),
//     numOfServices = services.length,
//     currentService = 1;
let categoryButtons = document.querySelectorAll('.categories button'),
    choosedCategoryButton = categoryButtons[0];
let postArrows = document.querySelectorAll('.recent-posts .arrows i'),
    posts = document.querySelectorAll('.recent-posts .post'),
    currentPost = 1;
    // choosedPost = post[1];
// console.log(postArrows);

function NavHandler() {
    let navList = document.querySelector('.navbar-collapse');
    if (navList.classList.contains('show')) {
        document.querySelector('.top-information').classList.remove('hide');
        document.querySelector('.slides').classList.remove('hide');
    } else {
        document.querySelector('.top-information').classList.add('hide');
        document.querySelector('.slides').classList.add('hide');
    }
}

function ArrowHandlerLeft() {
    slides[currentSlide - 1].classList.remove('choosedSlide');
    currentSlide = (currentSlide > 1) ? --currentSlide : numOfSlides;
    slides[currentSlide - 1].classList.add('choosedSlide');
}

function ArrowHandlerRight() {
    slides[currentSlide - 1].classList.remove('choosedSlide');
    currentSlide = (currentSlide < numOfSlides) ? ++currentSlide : 1;
    slides[currentSlide - 1].classList.add('choosedSlide');
}

function CategoryHandler() {
    choosedCategoryButton.classList.remove('choosed');
    this.classList.add('choosed');
    choosedCategoryButton = this;
}

function PostArrowHandlerLeft() {
    posts[currentPost].classList.remove('choosed');
    currentPost = (currentPost - 1 + posts.length) % posts.length;
    posts[currentPost].classList.add('choosed');
}

function PostArrowHandlerRight() {
    posts[currentPost].classList.remove('choosed');
    currentPost = (currentPost + 1) % posts.length;
    posts[currentPost].classList.add('choosed');
}


navButton.addEventListener('click', NavHandler);
arrows[0].addEventListener('click', ArrowHandlerLeft);
arrows[1].addEventListener('click', ArrowHandlerRight);
for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener('click', CategoryHandler);
}
postArrows[0].addEventListener('click', PostArrowHandlerLeft);
postArrows[1].addEventListener('click', PostArrowHandlerRight);