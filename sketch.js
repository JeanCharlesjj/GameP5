//Constantes do game
var screen = 0;
var border = 150;
var widthButton = 200, heightButton = 60;
var coordXButton = 180;
var coordXButtonBack = 340, coordYButtonBack = 500, widthButtonBack = 240;
var coordY_PlayButton = 180, coordY_OptionButton = 270, coordY_CreditsButton = 360;
var coodX_player = 260, coodY_player = 500;
let menuTitle, menu_background, play_button, option_button, credtis_button, back_button; 
var player = [], background_game = [];
var player_frame = 1, time_frame_player = 40,time_frame_background = 40, background_frame = 1;

//Carregamento das imagens
function preload(){
  //Imagens estáticas
  menu_background = loadImage('/img/menu_background.png');
  menuTitle = loadImage('/img/menu_title.png');
  play_button = loadImage('/img/play_button.png');
  option_button = loadImage('/img/info_button.png');
  credtis_button = loadImage('/img/credt_button.png');
  back_button = loadImage('/img/back_button.png');

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
  //background color
  background(106, 90, 205);

  image(menu_background, 0, 0);
  image(menuTitle, 110, 70);
  
  //menu buttons
 
  image(play_button, coordXButton, coordY_PlayButton); // botão jogar
  image(option_button, coordXButton, coordY_OptionButton) // botão opções
  image(credtis_button, coordXButton, coordY_CreditsButton) // botão Créditos

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
