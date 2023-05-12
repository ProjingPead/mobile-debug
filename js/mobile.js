const banner = document.querySelector(".banner")
let slide = 0;
const banner1 = "./img/Mobile/banner1.png"
const banner2 = "./img/Mobile/banner2.png"
const banner3 = "./img/Mobile/banner3.png"
const banner4 = "./img/Mobile/banner4.png"




function ChangeSlides() {
    slide++;
    if (slide > 4) slide = 1;
    console.log(slide);

    if (slide === 1) {
        banner.setAttribute('src', banner2);
    } else if (slide === 2) {
        banner.setAttribute('src', banner3);
    } else if (slide === 3) {
        banner.setAttribute('src', banner4);
    } else if (slide === 4) {
        banner.setAttribute('src', banner1);
    }
}

setInterval(ChangeSlides, 5000)
