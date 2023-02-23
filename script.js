//<body>
    //<div id="area"onclick="Clicar()" onmouseenter="entrar()" onmouseout="sair()">
    //    Interaja...
    //</div>
//<!--onclick="Clicar() quando clica muda-->
//<!--onmouseenter="entrar()" onmouseout="sair()" quando só coloca ou tira o mouse-->
    //<script>
var a = document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)
// A mesma função na body pode ser feita aqui com essa adição de eventos no script.
// Se tirar o código aqui embaixo ou em cima a função permanece.
        function clicar() {
            <a class="contact" href="https://wa.me/message/USPSNLNW243ZI1" target="_blank" style="center">WhatsApp</a>
            a.innerText = 'Clicou!'
            a.style.background = 'red'
        } //Function permite a interação do usuário.
        function entrar() {
            a.innerText = 'WhatsApp'
            a.style.background = 'blue'
        }
        function sair() {
            a.innerText = 'WhatsApp'
            a.style.background = 'green'
        }
        