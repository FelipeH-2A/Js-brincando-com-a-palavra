let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Felipe", "Felizcidade", "Feliz", "Fernando"];
  
  return random(palavras);
}

function inicializaCores() {
  background("blue");
  fill("yellow");
  textSize(70);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();
  mouse();
  let texto = palavraParcial(0, width);
    
  text(texto, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Come to brazil, please?");
  } else {
    console.log("Project by Felipe H.");
    console.log("Salve o Tricolor paulista")
  } 
  
}

modoNoturno(15);
modoNoturno(20);

function mouse () {
 if(mouseX <=10){
  setup(palavraAleatoria) 
 }
}