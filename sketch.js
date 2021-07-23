 var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wal10,wal11,wal12,wal13,
 wal14,wal15,wal16,wal17,wal18,
 wal19,wal20,wal21,wal22,wal23,wal24,wal25,wal26,wal27,wal28,wal29,
 wal30,wal31,wal32,wal33,wal34,wal35,wal36,wal37,wal38,wal39,wal40;
 var player;

function preload(){


















}
function setup(){
createCanvas(4000,3000);
wall1=createSprite(291,2659,1000,100);
wall2=createSprite(2903,2659,2500,100);
wall3=createSprite(3740,420,100,4690);
wall4=createSprite(115,135,7500,100);
wall5=createSprite(163,430,100,4690);
wall6=createSprite(700,2200,100,1000);
wall7=createSprite(1212,2434,100,500);
wall8=createSprite(1100,1921,1318,100);
wall9=createSprite(1206,1745,100,400);
wal10=createSprite(1363,2662,700,100);
wal11=createSprite(1862,1288,700,100);
wal12=createSprite(1606,2123,100,400);
wal13=createSprite(1724,2123,580,100);
wal14==createSprite(1929,2295,100,330);
wal15=createSprite(2368,2332,890,100);
wal16=createSprite(2780,2122,100,400);
wal17==createSprite(3424,2473,700,100);
wal18==createSprite(2199,1269,100,700);
wal19=createSprite(2195,1661,1000,100);
wal20=createSprite(2406,1928,100,450);
wal21=createSprite(1974,1818,100,250);
wal22=createSprite(3280,1710,900,100);
wal23=createSprite(3372,1948,100,600);
wal24=createSprite(3165,2085,359,100);
wal25=createSprite(3110,708,100,1090);
wal26=createSprite(3337,749,359,100);
wal27=createSprite(3011,1381,1000,100);
wal28=createSprite(761,1294,1000,100);
wal30=createSprite(505,455,830,100);
wal31=createSprite(2771,923,780,100);
wal32=createSprite(873,2345,200,100);
wal33=createSprite(905,1486,100,290);
wal34=createSprite(1286,474,100,790);
wal35=createSprite(1964,455,100,700);
wal36=createSprite(1654,560,530,100);
wal37=createSprite(2355,605,570,100);
wal38=createSprite(492,805,570,100);
wal39=createSprite(1212,1115,570,100);
player=createSprite(896,2636,80,80);
player.shapeColor="skyBlue";
}
function draw(){
background("Green");

//console
console.log(mouseX);
console.log(mouseY);
if (keyDown(RIGHT_ARROW)){
   player.x=player.x+8
camera.position.x=player.x+10;
camera.position.y=player.y+10;
}
if (keyDown(LEFT_ARROW)){
    player.x=player.x-8
    camera.position.x=player.x+10;
    camera.position.y=player.y+10;
}
if(keyDown(DOWN_ARROW)){
    player.y=player.y+8
}
if (keyDown(UP_ARROW)){
    player.y=player.y-8
}



drawSprites();
}