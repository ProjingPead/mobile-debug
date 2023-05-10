const voltar = document.querySelector("#voltar")
const pageService = document.querySelector(".services_description")

voltar.addEventListener("click", e => {
    pageService.style.display = "none"
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