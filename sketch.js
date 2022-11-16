var screen = 0;
var border = 150;
var widthButton = 200, heightButton = 50;
var coordXButton = 100;
var coordXButtonBack = 230, coordYButtonBack = 330, widthButtonBack = 150;
var coordY_PlayButton = 150;
let menuTitle, menu_background, play_button;

function preload(){
  menu_background = loadImage('/img/menu_background.png');
  menuTitle = loadImage('/img/menu_title.png');
  play_button = loadImage('/img/play_button.png')
}

function setup() {
  createCanvas(400, 400);
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
  image(menuTitle, 45, 45);
  //style of text
  textSize(30);
  //text("Título do Game", 100, 75);

  noStroke(); //remove all borders
  
  //menu buttons
  fill(250, 128, 114);
  //rect(coordXButton, 150, widthButton, heightButton, 10); //Jogar
  image(play_button, coordXButton, coordY_PlayButton);
  rect(coordXButton, 220, widthButton, heightButton, 10); //Informações
  rect(coordXButton, 290, widthButton, heightButton, 10); //Créditos

  //Style and text of buttons
  fill(255, 255, 0);
  //text("Jogar", 160, 188);
  text("Informações", 110, 255);
  text("Créditos", 140, 325);

  //viewing button border
  noFill();
  stroke(255, 255, 255);
  rect(100, border, widthButton, heightButton, 10);

  if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 150 &&
    mouseY <= 200
  ) {
    coordY_PlayButton = 145;
    if (mouseIsPressed) {
      screen = 1;
    }
  } else if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 220 &&
    mouseY <= 270
  ) {
    border = 220;
    if (mouseIsPressed) {
      screen = 2;
    }
  } else if (
    mouseX >= coordXButton &&
    mouseX <= coordXButton + widthButton &&
    mouseY >= 290 &&
    mouseY <= 330
  ) {
    border = 290;
    if (mouseIsPressed) {
      screen = 3;
    }
  }else {
    coordY_PlayButton = 150;
  }
}

function Game() {
  //background color
  background(131, 111, 255);

  //style of text
  textSize(30);
  text("Tela do Game", 100, 50);
  textSize(15);
  text("Coming Soon", 150, 200);

  //removing border
  noStroke();
  fill(250, 128, 114);

  //back button
  rect(coordXButtonBack, coordYButtonBack, widthButtonBack, heightButton, 10);
  fill(255, 255, 255);
  textSize(20);
  text("Voltar", 280, 363);

  //adding border on mouse hover
  noFill();
  border = 330;
  stroke(255, 255, 255);
  rect(230, border, widthButtonBack, heightButton, 10);

  if (
    mouseX >= coordXButtonBack &&
    mouseX <= coordXButtonBack + widthButtonBack &&
    mouseY >= coordYButtonBack &&
    mouseY <= coordYButtonBack + heightButton
  ) {
    border = 330;
    if (mouseIsPressed) {
      screen = 0;
      border = 150;
    }
  }
}

function Information() {
  //background color
  background(105, 89, 205);

  //style of text
  textSize(25);
  text("Tela de Informações do Game", 20, 50);
  textSize(15);
  text("Coming Soon", 150, 200);

  //removing border
  noStroke();
  fill(250, 128, 114);

  //back button
  rect(coordXButtonBack, coordYButtonBack, widthButtonBack, heightButton, 10);
  fill(255, 255, 255);
  textSize(20);
  text("Voltar", 280, 363);

  //adding border on mouse hover
  noFill();
  border = 330;
  stroke(255, 255, 255);
  rect(230, border, widthButtonBack, heightButton, 10);

  if (
    mouseX >= coordXButtonBack &&
    mouseX <= coordXButtonBack + widthButtonBack &&
    mouseY >= coordYButtonBack &&
    mouseY <= coordYButtonBack + heightButton
  ) {
    border = 330;
    if (mouseIsPressed) {
      screen = 0;
      border = 150;
    }
  }

}

function Credits() {
  //background color
  background(255, 0, 255);

  //style of text
  textSize(25);
  text("Tela de Créditos do Game", 50, 50);
  textSize(15);
  text("Coming Soon", 150, 200);

  //removing border
  noStroke();
  fill(250, 128, 114);

  //back button
  rect(coordXButtonBack, coordYButtonBack, widthButtonBack, heightButton, 10);
  fill(255, 255, 255);
  textSize(20);
  text("Voltar", 280, 363);

  //adding border on mouse hover
  noFill();
  border = 330;
  stroke(255, 255, 255);
  rect(230, border, widthButtonBack, heightButton, 10);

  if (
    mouseX >= coordXButtonBack &&
    mouseX <= coordXButtonBack + widthButtonBack &&
    mouseY >= coordYButtonBack &&
    mouseY <= coordYButtonBack + heightButton
  ) {
    border = 330;
    if (mouseIsPressed) {
      screen = 0;
      border = 150;
    }
  }
}
