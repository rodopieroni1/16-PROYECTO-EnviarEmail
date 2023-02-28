document.addEventListener('DOMContentLoaded', function () {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''

    }
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario  button[type="submit"]')

    //Asignar evento
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido: ', e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //comprobar el objeto del email
        comprobarEmail();    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-withe', 'p-2', 'text-center');
        //Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
       if(Object.values(email).includes('')){
       }else{
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
       }
    }
});    