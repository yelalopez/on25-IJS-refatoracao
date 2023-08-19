function iniciaJogo(){
  let url = window.location.search;
  let nivelJogo = url.replace("?", "");
  let tempoSegundo = 0;

  if(nivelJogo == 1){
      tempoSegundo = 120;
  }else if(nivelJogo == 2){
    tempoSegundo = 60;
  }else{
    tempoSegundo = 30;
  }

  document.getElementById('cronometro').innerHTML = tempoSegundo;
  let qtdeBaloes = 80;
  
  cria_baloes(qtdeBaloes);

  document.getElementById('baloes_inteiros').innerHTML = qtdeBaloes;
  document.getElementById('baloes_estourados').innerHTML = 0;

  contagemTempo (tempoSegundo + 1)
}


function contagemTempo (segundos){
  segundos = segundos - 1;

  if (segundos == -1) {
    clearTimeout(timerId); 
    gameOver();
    return false;
  }
  document.getElementById('cronometro').innerHTML = segundos;

  timerId = setTimeout("contagemTempo ("+segundos+")",1000);
}

function gameOver(){
   remove_eventos_baloes();
  alert('AAAAAAAAh Acabou o tempo, voce nao conseguiu!')
}

function remove_eventos_baloes() {
    let i = 1;

  o
    while(document.getElementById('b'+i)) {
        document.getElementById('b'+i).onclick = '';
        i++; 
    }
}

function cria_baloes(qtdeBaloes){
for(let i = 1; i<= qtdeBaloes; i++){
    let balao = document.createElement("img");
    balao.src = "imagens/balao_azul_pequeno.png";
	balao.style.margin = '10px';
  balao.id = 'b'+i;
  balao.onclick = function(){ estourar(this); };

    document.getElementById('cenario').appendChild(balao);
        }
}

function estourar(e){
  let id_balao = e.id;
  document.getElementById(id_balao).setAttribute("onclick","");
document.getElementById(id_balao).src = "imagens/balao_azul_pequeno_estourando.png";
pontuacao(-1);
}

function pontuacao(acao){
let baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
let baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

baloes_inteiros = parseInt(baloes_inteiros);
baloes_estourados = parseInt(baloes_estourados);

baloes_inteiros = baloes_inteiros + acao;
baloes_estourados = baloes_estourados - acao;

document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
document.getElementById('baloes_estourados').innerHTML = baloes_estourados;
situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros){
  if (baloes_inteiros == 0) {
    alert('UUUUHFA ,aha você conseguiu!');
    parar_jogo();


  }
}

function parar_jogo(){
  clearTimeout(timerId);
}
