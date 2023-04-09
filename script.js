function init() {
 
    let a = document.createElement("a");
    a.setAttribute("href", "https://web.whatsapp.com/");
    let aTexto = document.createTextNode("Whatsapp");
    a.appendChild(aTexto);
     
    document.body.appendChild(a);
 
}
 
window.onload = init;