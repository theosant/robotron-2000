const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento) => {
    elemento.addEventListener("click", (event) => {
        manipulaDados(event.target);
        atualizaEstatistica(event.target);
    })
})


function manipulaDados(target) {
    const peca = target.parentNode.querySelector("[data-contador]")
    if (target.dataset.controle == "+") {
        peca.value = parseInt(peca.value) + 1;
    } else if (target.dataset.controle = "-") {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatistica(target) {
    let peca = target.dataset.peca;
    estatisticas.forEach((elemento) => {
        if (target.dataset.controle == "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else if (target.dataset.controle = "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })
}