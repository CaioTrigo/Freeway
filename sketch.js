function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarrosA();
  mostraCarrosB();
  movimentaCarrosA();
  movimentaCarrosB();
  movimentaAtor();
  voltaPosicaoInicialDosCarrosA();
  voltaPosicaoInicialDosCarrosB();
  verificaColisaoA(); 
  verificaColisaoB();
  incluiPontos();
  marcaPontos();
}
