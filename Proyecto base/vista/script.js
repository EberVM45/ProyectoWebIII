/*var btnSignUp = document.getElementById('btnSignUp');
var divDatosInicio = document.getElementById('datosInicio');
var divdatosRegistro = document.getElementById('datosRegistro');
var divImagen = document.getElementById('divImagen');
var nuevoUsuario = document.getElementById('nuevoUsuario');
var viejoUsuario = document.getElementById('viejoUsuario');
var txtSignIn= document.getElementById('SignIn');
var txtSignUp= document.getElementById('SignUp');
var click=true;

function animacion() {
    if(click==true){
        btnSignUp.addEventListener('click', () => {
            divImagen.classList.add('moverImagen');
            divDatosInicio.classList.add('desaparece');
            divdatosRegistro.classList.add('aparece');
            nuevoUsuario.classList.add('desaparece');
            viejoUsuario.classList.add('aparece');
            txtSignIn.classList.add('aparece');
            txtSignUp.classList.add('desaparece');
   
            divImagen.classList.remove('moverRegreso');
            divDatosInicio.classList.remove('aparece');
            divdatosRegistro.classList.remove('desaparece');
            nuevoUsuario.classList.remove('aparece');
            viejoUsuario.classList.remove('desaparece');
            txtSignIn.classList.remove('desaparece');
            txtSignUp.classList.remove('aparece');
        });
        click=false;
    }else if(click==false){
        btnSignUp.addEventListener('click', () => {
            divImagen.classList.remove('moverImagen');
            divDatosInicio.classList.remove('desaparece');
            divdatosRegistro.classList.remove('aparece');
            nuevoUsuario.classList.remove('desaparece');
            viejoUsuario.classList.remove('aparece');
            txtSignIn.classList.remove('aparece');
            txtSignUp.classList.remove('desaparece');

            divImagen.classList.add('moverRegreso');
            divDatosInicio.classList.add('aparece');
            divdatosRegistro.classList.add('desaparece');
            nuevoUsuario.classList.add('aparece');
            viejoUsuario.classList.add('desaparece');
            txtSignIn.classList.add('desaparece');
            txtSignUp.classList.add('aparece');
        });
        click=true;
    }
}
*/
let welcome=document.getElementById('welcome');
let div_form2=document.getElementById('div_form2');
let letras1=document.getElementById('letras1');
let letras2=document.getElementById('letras2');
function mover()
{
  welcome.classList.add('animacion');
  div_form2.classList.add('animacion3');
  letras1.classList.add('letrasmover');
  letras2.classList.add('letrasmover2');
  
  welcome.classList.remove('animacion4');
  letras1.classList.remove('letrasmover4');
  letras2.classList.remove('letrasmover3');
  div_form2.classList.remove('animacion5')

}
function mover2()
{
  welcome.classList.remove('animacion');
  div_form2.classList.remove('animacion3');
  letras1.classList.remove('letrasmover');
  letras2.classList.remove('letrasmover2');

  div_form2.classList.add('animacion5')
  welcome.classList.add('animacion4');
  letras1.classList.add('letrasmover4');
  letras2.classList.add('letrasmover3');
  
  

}

