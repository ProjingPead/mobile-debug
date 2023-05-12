const banner = document.querySelector(".banners")
let slide = 0;
const banner1 = "url(../img/Mobile/banner1.png)"
const banner2 = "url(../img/Mobile/banner2.png)"
const banner3 = "url('../img/Mobile/banner3.png')"
const banner4 = "url('../img/Mobile/banner4.png')"

function ChangeSlides() {
    slide++;
    if (slide > 4) slide = 1;
    console.log(slide);

    if (slide === 1) {
        banner.style.backgroundImage = banner1
    } else if (slide === 2) {
        banner.style.backgroundImage = banner2
    } else if (slide === 3) {
        banner.style.backgroundImage = banner3
    } else if (slide === 4) {
        banner.style.backgroundImage = banner4
    }
}

setInterval(ChangeSlides, 5000)




