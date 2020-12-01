// Variables


eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

}








// Funciones

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}






