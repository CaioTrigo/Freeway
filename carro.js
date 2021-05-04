let xCarrosA = [600,600,600];
let xCarrosB = [-50, -50, -50];
let yCarrosA = [40, 100, 150];
let yCarrosB = [210, 260, 320];
let velocidadeCarrosA = [7, 5, 6.5];
let velocidadeCarrosB = [4.5, 6, 3.5];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarrosA(){
  for (let i = 0; i < imagemCarrosA.length; i++){
    image(imagemCarrosA[i], xCarrosA[i], yCarrosA[i], comprimentoCarros, alturaCarros);
  }
}

function mostraCarrosB(){
  for (let i = 0; i < imagemCarrosB.length; i++){
    image(imagemCarrosB[i], xCarrosB[i], yCarrosB[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarrosA() {
  for (let i = 0; i < imagemCarrosA.length; i++){
    xCarrosA[i] -= velocidadeCarrosA[i];
  }
}

function movimentaCarrosB() {
  for (let i = 0; i < imagemCarrosB.length; i++){
    xCarrosB[i] += velocidadeCarrosB[i];
  }
}

function voltaPosicaoInicialDosCarrosA(){
  for (let i = 0; i < imagemCarrosA.length; i++){
    if (passouTodaATelaA(xCarrosA[i])){
      xCarrosA[i] = 600;
    }
  }
}

function voltaPosicaoInicialDosCarrosB(){
  for (let i = 0; i < imagemCarrosB.length; i++){
    if (passouTodaATelaB(xCarrosB[i])){
      xCarrosB[i] = -50;
    }
  }
}

function passouTodaATelaA(xCarrosA){
  return xCarrosA < - 50 ;
}

function passouTodaATelaB(xCarrosB){
  return xCarrosB > 600 ;
}