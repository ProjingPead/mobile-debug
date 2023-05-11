const voltar = document.querySelector("#voltar")
const pageService = document.querySelector(".services_description_page")

voltar.addEventListener("click", e => {
    pageService.setAttribute('class', 'services_description_page animate__animated animate__slideOutDown')
    setTimeout(function () {
        pageService.style.display = "none"
        pageService.setAttribute('class', 'services_description_page animate__animated animate__slideInUp')
    }, 900);

})

function capturaCliques() {
    document.addEventListener('click', e => {
        const elemento = e.target;
        if (elemento.classList.contains('s1')) pageService.style.display = "block";
        if (elemento.classList.contains('s2')) pageService.style.display = "block";
        if (elemento.classList.contains('s3')) pageService.style.display = "block";
        if (elemento.classList.contains('s4')) pageService.style.display = "block";

    });
};

capturaCliques();