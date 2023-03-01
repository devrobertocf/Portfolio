//Texto 01 será escrito, apaga, depois texto 02 será escrito e apaga tudo.

document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    })
    .type('Aguarde...', {delay:900}).delete(10)
    .type('Novidades a camin', {delay: 500}).delete(7)
    .type('em breve!', {delay: 500})
    // O nº entre o parenteses do delete diz qts caracteres serão apagados.
    .go()
})

//Texto será escrito um depois do outro, depois apaga tudo.
//document.addEventListener('DOMContentLoaded', () =>{
    //new TypeIt(".animated", {
        //speed: 200,
        //strings: ["Aguarde...", "Novidades em breve..."],
       
    //}).go()
//})

// JS para animação do botão...
//<body>
    //<div id="area"onclick="Clicar()" onmouseenter="entrar()" onmouseout="sair()">
    //    Interaja...
    //</div>
//<!--onclick="Clicar() quando clica muda-->
//<!--onmouseenter="entrar()" onmouseout="sair()" quando só coloca ou tira o mouse-->
    //<script>
//var a = document.getElementById('area')
        //a.addEventListener('click', clicar)
        //a.addEventListener('mouseenter', entrar)
        //a.addEventListener('mouseout', sair)
// A mesma função na body pode ser feita aqui com essa adição de eventos no script.
// Se tirar o código aqui embaixo ou em cima a função permanece.
        //function clicar() {
            //<a class="contact" href="https://wa.me/message/USPSNLNW243ZI1" target="_blank" style="center">WhatsApp</a>
            //a.innerText = 'Clicou!'
            //a.style.background = 'red'
        //} //Function permite a interação do usuário.
        //function entrar() {
            //a.innerText = 'WhatsApp'
            //a.style.background = 'blue'
        //}
        //function sair() {
            //a.innerText = 'WhatsApp'
            //a.style.background = 'green'
        //}
        