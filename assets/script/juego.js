const btnP1 = document.getElementById('btnP1');
const btnP2 = document.getElementById('btnP2');
const btnP3 = document.getElementById('btnP3');
const btnP4 = document.getElementById('btnP4');
const btnP5 = document.getElementById('btnP5');
const btnP6 = document.getElementById('btnP6');

const foto1 = document.getElementById('foto1');
const foto2 = document.getElementById('foto2');
const foto3 = document.getElementById('foto3');
const foto4 = document.getElementById('foto4');
const foto5 = document.getElementById('foto5');
const foto6 = document.getElementById('foto6');
const foto7 = document.getElementById('foto7');
const foto8 = document.getElementById('foto8');
const foto9 = document.getElementById('foto9');
const foto10 = document.getElementById('foto10');
const foto11 = document.getElementById('foto11');
const foto12 = document.getElementById('foto12');
let fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12]
let puntaje = document.getElementById('puntaje');
let puntajeTotal = 8;
if(localStorage.getItem('puntaje') !== null ){
    puntaje.innerText = localStorage.getItem('puntaje')
}else {
    puntaje.innerText = puntajeTotal
}

let preguntas = {
    esPeliNegro: 'Si',
    tieneAccesorio: 'No',
    tienePeloLargo: 'Si',
    tienePrendaOscura: 'Si',
}
let tiempo = new Date().getSeconds()
let tiempoTotal

btnP1.addEventListener('click', () => {
    swal(preguntas.esPeliNegro)

})
btnP2.addEventListener('click', () => {
    swal(preguntas.tieneAccesorio)

})

btnP3.addEventListener('click', () => {
    swal(preguntas.tienePeloLargo)

})

btnP4.addEventListener('click', () => {
    swal(preguntas.tienePrendaOscura)
})

btnP5.addEventListener('click', () => {


})
btnP6.addEventListener('click', () => {

})

for (let i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener('click', () => {
        fotos[i].classList.add('tachar')
    })
}

for (let i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener('dblclick', () => {
        if (fotos[i] === fotos[6]) {
            let demora = new Date().getSeconds()
            tiempoTotal = (demora - tiempo)
            if(tiempoTotal < 60){
                puntajeTotal += 4
                localStorage.setItem('puntaje', puntajeTotal)
                puntaje.innerText = localStorage.getItem('puntaje')
            }else if(tiempoTotal < 90){
                    puntajeTotal += 3
                    localStorage.setItem('puntaje', puntajeTotal)
                    puntaje.innerText = localStorage.getItem('puntaje')
            }else if(tiempoTotal < 120){
                puntajeTotal += 2
                localStorage.setItem('puntaje', puntajeTotal)
                puntaje.innerText = localStorage.getItem('puntaje')
            }else{
                puntajeTotal += 1
                localStorage.setItem('puntaje', puntajeTotal)
                puntaje.innerText = localStorage.getItem('puntaje')
            }
            if (tiempoTotal === 1) {
                swal(`¡Felicidades! tu tiempo ha sido de: ${tiempoTotal} segundo`).then(value => {
                    if (value) {
                        puntajeTotal = 8
                        localStorage.setItem('puntaje', puntajeTotal)
                        puntaje.innerText = localStorage.getItem('puntaje')
                        document.location.reload(true)
                    } else {
                        console.log('ta bien')
                    }
                })
            } else {
                swal(`¡Felicidades! tu tiempo ha sido de: ${tiempoTotal} segundos`).then(value => {
                    if (value) {
                        puntajeTotal = 8
                        localStorage.setItem('puntaje', puntajeTotal)
                        puntaje.innerText = localStorage.getItem('puntaje')
                        document.location.reload(true)
                    } else {
                        console.log('ta bien')
                    }
                })
            }
        } else {
            puntajeTotal -= 1
            localStorage.setItem('puntaje', puntajeTotal)
            puntaje.innerText = localStorage.getItem('puntaje')
            swal('No es el personaje')
            if (puntajeTotal === 0) {
                swal({
                        title: "Perdiste :(",
                        text: "¿Quieres volver a jugar?",
                        icon: "danger",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then(value => {
                        if (value) {
                            document.location.reload(true)
                        } else {
                            console.log('ta bien')
                        }
                    })
            }
        }
    })
}