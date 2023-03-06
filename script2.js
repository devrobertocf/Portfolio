//Mudar a cor do botão quando coloca e tira o mouse.

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#da0c0c';
    button.style.color = '#fff';
  });
});

//Deixar texto em NEGRITO quando passa o mouse em cima.

function negrito(elemento) {
  elemento.style.fontWeight = "bold";
}

function normal(elemento) {
  elemento.style.fontWeight = "normal";
}