let yAtor = 370;
let xAtor = 200;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeDescer()){
      yAtor += 3
      } 
  }
    if(keyIsDown(RIGHT_ARROW)){
      if(xAtor <= 470){
        xAtor += 3        
      }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(xAtor >= 0){
        xAtor -= 3        
      }
  }
}

function verificaColisaoA(){
  for(let i = 0; i < imagemCarrosA.length; i++) {
    colisao = collideRectCircle(xCarrosA[i], yCarrosA[i], comprimentoCarros, alturaCarros,xAtor, yAtor, 15);
    if(colisao){
      atorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function verificaColisaoB(){
  for(let i = 0; i < imagemCarrosB.length; i++) {
    colisao = collideRectCircle(xCarrosB[i], yCarrosB[i], comprimentoCarros, alturaCarros,xAtor, yAtor, 15);
    if(colisao){
      atorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function atorPosicaoInicial(){
  yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,240,60));
  text(meusPontos, width / 5, 25);
}

function marcaPontos(){
  if(yAtor <= 10){
    meusPontos += 1;
    somDoPonto.play();
    atorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeDescer(){
  return yAtor < 370
}