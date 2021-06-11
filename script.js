const pixel = document.getElementsByClassName('pixel')

function tabela(tamanho)
{
  let tabelas = document.getElementById('pixel-board');
    for (let index = 0; index < tamanho; index++) {
    const coluns = document.createElement('div');
    coluns.className = 'colunas';
    tabelas.appendChild(coluns);   
}


let col = document.getElementsByClassName('colunas');
for (let indexTr = 0; indexTr < col.length; indexTr++) {
   for (let add = 0; add < col.length; add++) {
    const element = document.createElement('div');
    element.className = 'pixel';
    col[indexTr].appendChild(element);    
  }
  
}

}
tabela(5);

// pintando os pixel--------------------------

let baldeSelecionado = 'black';

function selecaoCor() {
  const paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index++) {
    paleta[index].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      const corSelecionada = event.target;
      corSelecionada.classList.add('selected');
      baldeSelecionado = window.getComputedStyle(corSelecionada).backgroundColor;
    });
  }
}
selecaoCor();


function pintandoPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = baldeSelecionado;
    });
  }
}
pintandoPixel();
//limpando os pixels --------------------------------------

function limpandoPixels() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index++) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
limpandoPixels();
