var dice1, dice2, dice3, dice4, dice4, dice5, dice6, ludo

function preload(){
dice1.loadImage("dice1.png")






}
  

function setup() {
  createCanvas(600,200);

  var message = "This is a message";
 console.log(message)

  ludo = createSprite(200,200,200,200)
  ludo.addImage("ludo", ludo)

  dice1 = createSprite(20,26,53,96)
  dice1.addImage("dice1", dice1 )

  drawSprite();
  
}
