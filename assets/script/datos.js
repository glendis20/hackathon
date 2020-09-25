
const nombre= document.getElementById('perfilNombre')
const apellido = document.getElementById('perfilApellido')

nombre.innerText = localStorage.getItem('nombre')
apellido.innerText = localStorage.getItem('apellido')

