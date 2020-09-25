const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value

    const alertNombre = document.getElementByI    
    const alertApellido = document.getElementById('alertApellido');
    if (nombre == '') {
        alertNombre.innerText = 'Por favor llene este campo'
    }
    if (apellido == '') {
        alertApellido.innerText = 'Por favor llene este campo'
    }
    if (nombre != '' && apellido != '') {
        localStorage.setItem('nombre', nombre)
        localStorage.setItem('apellido', apellido)
        swal("Hecho!", "Vamos a jugar!", "success")
        setTimeout(()=>{
            window.location='./assets/html/juego.html'
        }, 2500)
    }
})