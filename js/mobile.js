const banner = document.querySelector(".banners")
let slide = 0;

function ChangeSlides() {
    slide++;
    if (slide > 4) slide = 1;
    console.log(slide);

    if (slide === 1) {
        banner.style.backgroundColor = "red"
    } else if (slide === 2) {
        banner.style.backgroundColor = "blue"
    } else if (slide === 3) {
        banner.style.backgroundColor = "Green"
    } else if (slide === 4) {
        banner.style.backgroundColor = "white"
    }
}

setInterval(ChangeSlides, 5000)



