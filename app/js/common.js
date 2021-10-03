//slider
const sideSlide = document.querySelector('.side-slider');
const mainSlide = document.querySelector('.main-slider');
const slideCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.overlay');
let activeSlide = 0;
let time = 0;
sideSlide.style.top = `-${(slideCount - 1) * 90}vh`;
let timeUp = true;
function sliderTimer () {
    setInterval(changeSlide, 5000);
}
function changeSlide (timeUp) {
    if (!timeUp) {
        activeSlide++
        if(activeSlide === slideCount) {
            activeSlide = 0;
        }
    }
    let height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
    sideSlide.style.transform = `translateY(${activeSlide * height}px)`;
}
sliderTimer();
//active line
const tabLine = document.querySelector('.tab');
const tabLineLength = tabLine.querySelectorAll('li');
const tabContentLine = document.querySelector('.tabs__content');
for (let i = 0; i < tabLineLength.length; i++) {
    tabLineLength[i].onclick = function (e) {
        console.log(tabLineLength)
        removeClass();
        if(e.target.classList.contains !== "active") {
            this.classList.add('active')
        }
    }
}
function removeClass() {
    for(let i = 0; i < tabLineLength.length; i++) {
        tabLineLength[i].classList.remove('active');
    }
}