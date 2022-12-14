//Constantes e variáveis do game
var screen = 1;
var border = 150;
var widthButton = 200, heightButton = 60;
var coordXButton = 180;
var coordXButtonBack = 340, coordYButtonBack = 500, widthButtonBack = 240;
var coordY_PlayButton = 180, coordY_OptionButton = 270, coordY_CreditsButton = 360;
var coodX_player = 260, coodY_player = 500;

var player_frame = 1, time_frame_player = 40,time_frame_background = 40, background_frame = 1;
var cont = 0;
var isShooting = false, coordX_shoot, coordY_shoot;

var player = [], background_game = [];
let menuTitle, menu_background, play_button, option_button, credtis_button, back_button;
let meteor1, meteor2, meteor3;

var meteorFrame1 = 0;
var meteorFrame2 = 0;
var meteorFrame3 = 0;
var positionY_Meteor1 = 100;
var positionY_Meteor2 = 100; 
var positionY_Meteor3 = 100;
var positionX_Meteor1;
var positionX_Meteor2; 
var positionX_Meteor3;
var colisor1 = false;
var colisor2 = false;
var colisor3 = false;

let reset = 0;

//Carregamento das imagens
function preload(){
  //Imagens estáticas
  menu_background = loadImage('/img/menu_background.png');
  menuTitle = loadImage('/img/menu_title.png');
  play_button = loadImage('/img/play_button.png');
  option_button = loadImage('/img/info_button.png');
  credtis_button = loadImage('/img/credt_button.png');
  back_button = loadImage('/img/back_button.png');

  meteor1 = loadImage('./img/Meteors/Meteor1.png');
  meteor2 = loadImage('./img/Meteors/Meteor2.png');
  meteor3 = loadImage('./img/Meteors/Meteor3.png');

  //Animação do jogador.
  for(i = 1; i < 6;i++){
    player[i] = loadImage('./img/player/player'+i+'.png');
  }

  //Animação da background da fase jogável.
  for(i = 1; i < 10;i++){
    background_game[i] = loadImage('./img/background_game/Sprite-000'+i+'.png');
  }

}

function setup() {
  createCanvas(600, 600);

  positionX_Meteor1 = random(0,520);
  positionX_Meteor2 = random(0,520);
  positionX_Meteor3 = random(0,520);
}

function draw() {
  if (screen === 0) {
    Menu();
  } else if (screen === 1) {
    Game();
  } else if (screen === 2) {
    Information();
  } else {
    Credits();
  }
}

function Menu() {
  //Imagem de fundo
  image(menu_background, 0, 0);
  //Imagem do título
  image(menuTitle, 110, 70);
  
  //Botões do menu principal
  image(play_button, coordXButton, coordY_PlayButton); // botão jogar
  image(option_button, coordXButton, coordY_OptionButton) // botão opções
  image(credtis_button, coordXButton, coordY_CreditsButton) // botão Créditos

  //Colisões com os botões do Menu Principal
  if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 180 &&
    mouseY <= 240
  ) {
    coordY_PlayButton = 175;
    if (mouseIsPressed) {
      screen = 1;
    }
  } else if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 270 &&
    mouseY <= 330
  ) {
    coordY_OptionButton = 265;
    if (mouseIsPressed) {
      screen = 2;
    }
  } else if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 360 &&
    mouseY <= 400
  ) {
    coordY_CreditsButton = 355;
    if (mouseIsPressed) {
      screen = 3;
    }
  }else {
    coordY_PlayButton = 180;
    coordY_OptionButton = 270; 
    coordY_CreditsButton = 360;
  }
}

function Game() {
  //background color
  background(106, 90, 205);

  //Animação do background
  image(background_game[background_frame], 0, 0);
  if(time_frame_background > 9){
    background_frame++;
    if(background_frame > 9){
      background_frame = 1;
    }
    time_frame_background = 0;
  }

  //Animação do jogador
  image(player[player_frame], coodX_player, coodY_player);
  if(time_frame_player > 10){
    player_frame++;
    if(player_frame > 4){
      player_frame = 1;
    }
    time_frame_player = 0;
  }
  time_frame_player++;
  time_frame_background++;

  //Movimentação do jogador
  Move()
  //Animação de disparos
  Shoot();
  //Animação dos meteoros
  Meteors();
}

//Função responsável por desenhar os meteoros na tela
function Meteors(){
 /* meteorFrame1++;
  meteorFrame2++;
  meteorFrame3++;
  //velocidade de queda de cada meteoro
  if(meteorFrame1%2 === 0){
    positionY_Meteor1++;
  }else if(meteorFrame2%3 === 0){
    positionY_Meteor2++;
  }else if(meteorFrame3%1 === 0){
    positionY_Meteor3++;
  }*/
  
  //Caso não esteja colidindo desenhe o meteoro na tela.
  if(!colisor1){
    image(meteor1,positionX_Meteor1,positionY_Meteor1);
    textSize(20);
    fill(255,255,255);
    text('',positionX_Meteor1+35,positionY_Meteor1+47);
  }if(!colisor2){
    image(meteor2,positionX_Meteor2,positionY_Meteor2);
    textSize(20);
    fill(255,255,255);
    text('5',positionX_Meteor2+40,positionY_Meteor2+55);
  }if(!colisor3){
    image(meteor3,positionX_Meteor3,positionY_Meteor3);
    textSize(30);
    fill(255,255,255);
    text('5',positionX_Meteor3+30,positionY_Meteor3+60);
  }
  
  //checando se o cometa foi atingido e spawnando outro.
  if(colisor1){
    positionY_Meteor1 = -100;
    positionX_Meteor1 = random(0,520);
    image(meteor1,positionX_Meteor1,positionY_Meteor1);
    colisor1 = false;
  }
  if(colisor2){
    positionY_Meteor2 = -100;
    positionX_Meteor2 = random(0,520);
    image(meteor2,positionX_Meteor2,positionY_Meteor2);
    colisor2 = false;
  }
  if(colisor3){
    positionY_Meteor3 = -100;
    positionX_Meteor3 = random(0,520);
    image(meteor3,positionX_Meteor3,positionY_Meteor3);
    colisor3 = false;
  }

  //Caso o Meteoro saia da linha de visão do jogador, ele é reiniciado em outra posição X
  if(positionY_Meteor1 >= 690){
    positionY_Meteor1 = -100;
    positionX_Meteor1 = random(0,520);
  }if(positionY_Meteor2 >= 690){
    positionY_Meteor2 = -100;
    positionX_Meteor2 = random(0,520);
  }if(positionY_Meteor3 >= 690){
    positionY_Meteor3 = -100;
    positionX_Meteor3 = random(0,520);
  }
}

//Função de disparos
function Shoot(){  
  //Caso aperta a "setinha pra cima do teclado" e a função de disparo esteja desabilitada
  if(keyIsDown(UP_ARROW) && isShooting == false){
    //Receba as coordenadas de onde o tiro vai partir
    coordX_shoot = coodX_player + 35;
    coordY_shoot = coodY_player - 20;
    //Habilite o disparo
    isShooting = true;
  }

  //colisão entre disparo e meteoro
  if(dist(coordX_shoot,coordY_shoot,positionX_Meteor1,positionY_Meteor1) <= 80){
    colisor1 = true;
  }
  if(dist(coordX_shoot,coordY_shoot,positionX_Meteor2,positionY_Meteor2) <= 80){
    colisor2 = true;
  }
  if(dist(coordX_shoot,coordY_shoot,positionX_Meteor3,positionY_Meteor3) <= 80){
    colisor3 = true;
  }
  
  //Caso o disparo esteja habilitado, dispare
  if(isShooting){
    ellipse(coordX_shoot,coordY_shoot, 10,10);
    coordY_shoot -= 5;
      //Quando o disparo estiver no fim ou colidir com meteoro, desabilite o disparo para que o fluxo volte a acontecer
      if(coordY_shoot < 0 || colisor1 === true || colisor2 === true || colisor3 === true){
        isShooting = false;
      }
  }
}

//Função de movimentação do jogador
function Move(){
  if(keyIsDown(65)){ //Tecla "A"
    coodX_player -= 5;
  }else if(keyIsDown(68)){ //Tecla "D"
    coodX_player += 5;
  }else if(keyIsDown(27)){ //Tecla "ESC"
    screen = 0;
  }
}

function Information() {
  //Background da tela de informações
  image(menu_background, 0, 0);

  //Botão de voltar
  image(back_button, coordXButtonBack, coordYButtonBack);
  if (
    mouseX >= coordXButtonBack &&
    mouseX <= coordXButtonBack + widthButtonBack &&
    mouseY >= coordYButtonBack &&
    mouseY <= coordYButtonBack + heightButton
  ) {
    coordYButtonBack = 495;
    if (mouseIsPressed) {
      screen = 0;
    }
  }else{
    coordYButtonBack = 500;
  }
}

function Credits() {
  //Background da tela de informações
  image(menu_background, 0, 0);

  //Botão de voltar
  image(back_button, coordXButtonBack, coordYButtonBack);
  if (
    mouseX >= coordXButtonBack &&
    mouseX <= coordXButtonBack + widthButtonBack &&
    mouseY >= coordYButtonBack &&
    mouseY <= coordYButtonBack + heightButton
  ) {
    coordYButtonBack = 495;
    if (mouseIsPressed) {
      screen = 0;
    }
  }else{
    coordYButtonBack = 500;
  }
}
