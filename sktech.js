//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//variaveis da bolinha
let velocidadeXbolinha = 2;
let velocidadeYbolinha = 2;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variaveis da raquete
let xraquete = 5;
let yraquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (207,52,118);
  mostrabolinha();
  movimentabolinha();
  vereficacolisaoborda();
  mostraraquete(xraquete, yraquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xraquete, yraquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  
function mostrabolinha(){
 circle(xbolinha, ybolinha,diametro);
}

function movimentabolinha(){
  xbolinha += velocidadeXbolinha;
  //ybolinha += velocidadeYbolinha;
}

function vereficacolisaoborda(){
  if (xbolinha + raio> width ||
    xbolinha - raio< 0){
  velocidadeXbolinha *= -1;
}
  if (ybolinha + raio> height ||
    ybolinha - raio< 0){
  velocidadeYbolinha *= -1;
 }
}

function mostraraquete(x,y){
  rect(x, y, raquetecomprimento, raquetealtura);
}
  
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xbolinha - raio < xraquete + raquetecomprimento
        && ybolinha - raio < yraquete + raquetealtura
        && ybolinha + raio > yraquete) {
        velocidadeXbolinha *= -1;
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}
  
function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}
