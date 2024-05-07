carousel = document.querySelector(".carousel")
leftControl = document.querySelector(".controls > img:nth-child(1)")
rightControl = document.querySelector(".controls > img:nth-child(3)")
let counter = 0

carouselSlides = [
    {"text": "Where passion <br> and coffee blend", "src": "assets/images/carouselSlides/01.jpg"},
    {"text": "02", "src": "assets/images/carouselSlides/02.jpg"},
    {"text": "03", "src": "assets/images/carouselSlides/03.jpg"},
    {"text": "04", "src": "assets/images/carouselSlides/04.jpg"},
    {"text": "05", "src": "assets/images/carouselSlides/05.jpg"},
];

function changeCarouselBG(control, count){
    if(count != undefined){ counter = count }
    else{ control == 'leftControl' ? counter-- : counter++ }

    carousel.style.backgroundImage = `url('${carouselSlides[counter].src}')`;
}

leftControl.addEventListener("click", () => { counter <= 0 ? changeCarouselBG('leftControl', carouselSlides.length-1) : changeCarouselBG('leftControl') });
rightControl.addEventListener("click", () => { counter < carouselSlides.length-1 ? changeCarouselBG('rightControl') : changeCarouselBG('rightControl', 0) });