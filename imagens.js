//imagens do jogo
var imagemDaEstrada;
var imagemDoAtor;
var imagemDoCarro;
var imagemDoCarro2;
var imagemDoCarro3;

//sons do jogo
var somDaTrilha;
var somDaColisao;
var somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}