const HOME = document.querySelector('body.home');
const ITEM = document.querySelector('body.item');
if(HOME) {
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
const tabContentLineLenght = tabContentLine.querySelectorAll('.tab-pane');
for (let i = 0; i < tabLineLength.length; i++) {
    tabLineLength[i].onclick = function (e) {
        e.preventDefault();
        console.log(e.target)
        removeClass();
        if(e.target.classList.contains !== "active") {
            this.classList.add('active');
            
            if (e.target.hash === `#${tabContentLineLenght[i].id}`){
                tabContentLineLenght[i].classList.add("fade");
                tabContentLineLenght[i].classList.add("in");
                tabContentLineLenght[i].classList.add("active");
            }
            
        }
    }
}
function removeClass() {
    for(let i = 0; i < tabLineLength.length; i++) {
        tabLineLength[i].classList.remove('active');
        tabContentLineLenght[i].classList.remove('active');
        tabContentLineLenght[i].classList.remove('in');
    }
}
}
if(ITEM) {
	const img_list_trak = document.querySelector('.img-list-trak');
	const pic_imgs = document.querySelector('.img-polite-traks');
	const pic_img = pic_imgs.querySelectorAll('.img-polite-trak');
	const WIDTH_TRANSFORM = 740;
	let pass_slide = 0;
	// реализацыя предведущей 
	
	pic_img[pass_slide].firstElementChild.classList.add('active');
	pic_imgs.addEventListener('click', e => {
		let curent_slide = e.target.dataset.indexNumber;
		console.log(curent_slide, pass_slide);
		if(curent_slide == 0) {
			pic_img[pass_slide].firstElementChild.classList.remove('active');
			img_list_trak.style.transform = `translate3d(-${WIDTH_TRANSFORM-WIDTH_TRANSFORM}px,0px,0px)`;
			pic_img[curent_slide].firstElementChild.classList.add('active');
		} else if ( curent_slide == 1) {
			pic_img[pass_slide].firstElementChild.classList.remove('active');
			img_list_trak.style.transform = `translate3d(-${WIDTH_TRANSFORM}px,0px,0px)`;
			pic_img[curent_slide].firstElementChild.classList.add('active');
		} else if (curent_slide == 2) {
			pic_img[pass_slide].firstElementChild.classList.remove('active');
			img_list_trak.style.transform = `translate3d(-${WIDTH_TRANSFORM*2}px,0px,0px)`;
			pic_img[curent_slide].firstElementChild.classList.add('active');
		} else if (curent_slide == 3) {
			pic_img[pass_slide].firstElementChild.classList.remove('active');
			img_list_trak.style.transform = `translate3d(-${WIDTH_TRANSFORM*3}px,0px,0px)`;
			pic_img[curent_slide].firstElementChild.classList.add('active');
		}
		
	})
}
