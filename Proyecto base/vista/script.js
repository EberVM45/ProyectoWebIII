var btnSignUp = document.getElementById('btnSignUp');
var divDatosInicio = document.getElementById('datosInicio');
var divdatosRegistro = document.getElementById('datosRegistro');
var divImagen = document.getElementById('divImagen');
var nuevoUsuario = document.getElementById('nuevoUsuario');
var viejoUsuario = document.getElementById('viejoUsuario');
var txtSignIn= document.getElementById('txtSignIn');
var txtSignUp= document.getElementById('txtSignUp');
var click=true;

function animacion() {
    if(click==true){
        btnSignUp.addEventListener('click', () => {
            divImagen.classList.add('moverImagen');
            divDatosInicio.classList.add('desaparece');
            divdatosRegistro.classList.add('aparece');
            nuevoUsuario.classList.add('desaparece');
            viejoUsuario.classList.add('aparece');
   
            divImagen.classList.remove('moverRegreso');
            divDatosInicio.classList.remove('aparece');
            divdatosRegistro.classList.remove('desaparece');
            nuevoUsuario.classList.remove('aparece');
            viejoUsuario.classList.remove('desaparece');
        });
        click=false;
    }else if(click==false){
        btnSignUp.addEventListener('click', () => {
            divImagen.classList.remove('moverImagen');
            divDatosInicio.classList.remove('desaparece');
            divdatosRegistro.classList.remove('aparece');
            nuevoUsuario.classList.remove('desaparece');
            viejoUsuario.classList.remove('aparece');

            divImagen.classList.add('moverRegreso');
            divDatosInicio.classList.add('aparece');
            divdatosRegistro.classList.add('desaparece');
            nuevoUsuario.classList.add('aparece');
            viejoUsuario.classList.add('desaparece');
        });
        click=true;
    }
}


