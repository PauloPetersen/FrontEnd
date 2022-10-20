var btn = document.getElementById("button-up");
btn.addEventListener("click", topoPagina);


function topoPagina() {
    window.scrollTo(0,0);
}

let scrollPosition = 0;
document.addEventListener('scroll', (e) => {
    scrollPosition = window.scrollY
    revelaBotao(scrollPosition)
})

function revelaBotao(scrollPos) {
    if (scrollPos > 900) {
        btn.style.visibility = "visible";
    }
    else {
        btn.style.visibility = "hidden";
    }
}