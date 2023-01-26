  
function encriptar(){
    var texto= document.querySelector("#textarea").value.toLowerCase();
    var texto= texto.replace(/á/img, "a");
    var texto= texto.replace(/é/img, "e");
    var texto= texto.replace(/í/img, "i");
    var texto= texto.replace(/ó/img, "o");
    var texto= texto.replace(/ú/img, "u");
    var txtEncriptado=texto.replace(/e/img,"enter");
    var txtEncriptado=txtEncriptado.replace(/o/img,"ober");
    var txtEncriptado=txtEncriptado.replace(/i/img,"imes");
    var txtEncriptado=txtEncriptado.replace(/a/img,"ai");
    var txtEncriptado=txtEncriptado.replace(/u/img,"ufat");
    document.getElementById("textarea2").innerHTML=txtEncriptado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";
    document.getElementById("imagenMuneco").style.display="none";
    document.getElementById("parrafo").style.display="none";
}   
       

function copiar(){
            
    var txtCopiado= document.querySelector("#textarea2");
    txtCopiado.select();
    document.execCommand("copy");
}



function desencriptar(){
    var textoEncriptado= document.querySelector("#textarea").value.toLowerCase();
    var txtDesencriptado=textoEncriptado.replace(/enter/img,"e");
    var txtDesencriptado=txtDesencriptado.replace(/ober/img,"o");
    var txtDesencriptado=txtDesencriptado.replace(/imes/img,"i");
    var txtDesencriptado=txtDesencriptado.replace(/ai/img,"a");
    var txtDesencriptado=txtDesencriptado.replace(/ufat/img,"u");
            
            
    document.getElementById("textarea2").innerHTML=txtDesencriptado;
}

function limpiar(){
    var limpiar=document.querySelector("#borrar");
    limpiar.select();
    document.getElementById("#textarea").reset();
    document.getElementById("imagenMuneco").style.display="show";
    document.getElementById("parrafo").style.display="show";
    document.getElementById("btn-copiar").style.display="none";
    

}
        
       
       