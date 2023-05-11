const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const parrafo = document.getElementById("alert");

form.addEventListener("submit", e=>{
        e.preventDefault()
        let aviso = ""
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let entrar = false
        parrafo.innerHTML = ""
        if(nombre.value.length<6){//valida que el nombre sea de mas de 6 caracteres
            aviso +=  `El nombre no es valido <br>`
            entrar = true
        }
        if(!regexEmail.test(email.value)){//valida el correo
            aviso +=  `El email no es valido <br>`
            entrar = true
        }
        if(asunto.value.length<1){
            aviso += `Olvidaste poner el asunto <br>`
            entrar = true
        }
        if(mensaje.value.length<1){
            aviso += `No olvides poner tu mensaje <br>`
            entrar = true
        }
        
        if(entrar){
            parrafo.innerHTML = aviso
        }else{
            parrafo.innerHTML = "Enviado"
        }
    }
)




