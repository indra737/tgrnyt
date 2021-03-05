const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var ground1
function setup(){
    createCanvas(windowWidth,windowHeight)
    engine = Engine.create();
    world = engine.world;
    ground1= new Ground(600,height-300,250,20)
    ground2= new Ground(1300,height-200,250,20)
    ground3= new Ground(900,height-400,250,20)
    box1= new Box(500,height-360,30,50,100,200,255)
    box2= new Box(530,height-360,30,50,100,200,255)
    box3= new Box(560,height-360,30,50,100,200,255)
    box4= new Box(590,height-360,30,50,100,200,255)
    box5= new Box(620,height-360,30,50,100,200,255)
    box6= new Box(650,height-360,30,50,100,200,255)
    box7= new Box(680,height-360,30,50,100,200,255)
    box8= new Box(530,height-410,30,50,255,200,100)
    box9= new Box(560,height-410,30,50,255,200,100)
   box10= new Box(590,height-410,30,50,255,200,100)
   box11  = new Box(620,height-410,30,50,255,200,100)
    box12= new Box(650,height-410,30,50,255,200,100)
    box13= new Box(590,height-460,30,50,100,250,255)
   box14= new Box(560,height-460,30,50,100,250,255)
   box15= new Box(620,height-460,30,50,100,250,255)
   box16= new Box(590,height-510,30,50,200,200,255)
  box33= new Box(1200,height-260,30,50,100,200,255)
   box34= new Box(1230,height-260,30,50,100,200,255)
   box35= new Box(1260,height-260,30,50,100,200,255)
   box36= new Box(1290,height-260,30,50,100,200,255)
   box37= new Box(1320,height-260,30,50,100,200,255)
   box38= new Box(1350,height-260,30,50,100,200,255)
  box39= new Box(1380,height-260,30,50,100,200,255)
   box40= new Box(1230,height-310,30,50,255,200,100)
   box41= new Box(1260,height-310,30,50,255,200,100)
  box42= new Box(1290,height-310,30,50,255,200,100)
  box43  = new Box(1320,height-310,30,50,255,200,100)
   box44= new Box(1350,height-310,30,50,255,200,100)
   box45= new Box(1290,height-360,30,50,100,250,255)
  box46= new Box(1260,height-360,30,50,100,250,255)
  box47= new Box(1320,height-360,30,50,100,250,255)
  box48= new Box(1290,height-410,30,50,200,200,255)
  box17= new Box(800,height-460,30,50,100,200,255)
  box18= new Box(830,height-460,30,50,100,200,255)
  box19= new Box(860,height-460,30,50,100,200,255)
  box20= new Box(890,height-460,30,50,100,200,255)
  box21= new Box(920,height-460,30,50,100,200,255)
  box22= new Box(950,height-460,30,50,100,200,255)
  box23= new Box(980,height-460,30,50,100,200,255)
  box24= new Box(830,height-510,30,50,255,200,100)
  box25= new Box(860,height-510,30,50,255,200,100)
 box26= new Box(890,height-510,30,50,255,200,100)
 box27  = new Box(920,height-510,30,50,255,200,100)
  box28= new Box(950,height-510,30,50,255,200,100)
  box29= new Box(890,height-560,30,50,100,250,255)
 box30= new Box(860,height-560,30,50,100,250,255)
 box31= new Box(920,height-560,30,50,100,250,255)
 box32= new Box(890,height-610,30,50,200,200,255)
   player= new Player(200,height-250,30)
   slingshot= new Slingshot(player.body,{x: 200, y: height-250})
  
}

function draw(){
    background(50,40,20)
    Engine.update(engine)
    ground1.show()
    ground2.show()
    ground3.show()
    box1.show()
    box2.show()
    box3.show()
    box4.show()
    box5.show()
    box6.show()
    box7.show()
    box8.show()
    box9.show()
    box10.show()
    box11.show()
    box12.show()
    box13.show()
    box14.show()
    box15.show()
    box16.show()
    box17.show()
    box18.show()
    box19.show()
    box20.show()
    box21.show()
    box22.show()
    box23.show()
    box24.show()
    box25.show()
    box26.show()
    box27.show()
    box28.show()
    box29.show()
    box30.show()
    box31.show()
    box32.show()
    box33.show()
    box34.show()
    box35.show()
    box36.show()
    box37.show()
    box38.show()
    box39.show()
    box40.show()
    box41.show()
    box42.show()
    box43.show()
    box44.show()
    box45.show()
    box46.show()
    box47.show()
    box48.show()
    player.display()
    slingshot.show()
}

function mouseDragged(){
  
    Matter.Body.setPosition(player.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
   // gameState='over'
}

function keyPressed(){
    if(key===' '){
        slingshot.attach(player.body)
    }
}