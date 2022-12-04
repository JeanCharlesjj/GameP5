var screen = 3;
var border = 150;
var widthButton = 200, heightButton = 60;
var coordXButton = 180;
var coordXButtonBack = 340, coordYButtonBack = 500, widthButtonBack = 240;
var coordY_PlayButton = 180, coordY_OptionButton = 270, coordY_CreditsButton = 360;
var coodX_player = 260, coodY_player = 500;
let menuTitle, menu_background, play_button, option_button, credtis_button, back_button, player = [];
var player_frame = 0, tempo = 0;

function preload(){
  menu_background = loadImage('/img/menu_background.png');
  menuTitle = loadImage('/img/menu_title.png');
  play_button = loadImage('/img/play_button.png');
  option_button = loadImage('/img/info_button.png');
  credtis_button = loadImage('/img/credt_button.png');
  back_button = loadImage('/img/back_button.png');

  for(var i = 1; i < 6;i++){
    player[i] = loadImage('/img/player/player'+i+'.png');
  }
  //player = loadImage('/img/player/player1.png');

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

  tempo++;

  if(tempo > 10){
    player_frame++;
    tempo = 0;
  }

  image(menu_background, 0, 0);
  image(player[player_frame], coodX_player, coodY_player);
}

function Information() {
  background(106, 90, 205);

  image(menu_background, 0, 0);

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
  background(106, 90, 205);

  image(menu_background, 0, 0);

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
