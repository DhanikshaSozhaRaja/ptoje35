//Create variables here
var dog,happyDog,food,foodStock,database,foodS;
var foodS = 20;
function preload(){
	Dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
 
createCanvas(700,550);
  dog = createSprite(310,350,50,50);
  dog.addImage(Dog);
  dog.scale = 0.15; 
  database = firebase.database();
  console.log(database);
  var foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background("lightGreen");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

strokeWeight(1)
textSize(15);
fill("darkBlue");
stroke("PINK");
text("note: press up_arrow key to feed Toby milk!",230,80);
text("Food remaining:"+foodS,280,190)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x-=1;
  }
  database.ref('/').set({
    food:x
  })
}
function showError(){ 
  console.log("Error in writing to the database");
  }
