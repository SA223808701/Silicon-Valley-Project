var runner, runner_Img;
var bird1;
//,bird2,bird3;
//var bird1_Img, bird2_Img, bird3_Img;
var motorcar1;
var  motorcar2;
//, motorcar3;
var motorcar1_Img;
var  motorcar2_Img;
// motorcar3_Img;
//var motorbike1, motorbike2;
//var motorbike1_Img, motorbike2_Img;



function preload(){
    motorcar1_Img = loadImage("motorcar_1.png");
    motorcar2_Img = loadImage("motor_2.png");


    

   
    bird1_Img = loadImage("bird_1.png");
    runner_Img = loadImage("runner_1.png");

}

//API is a service which gives us some data based on our query.
//We use ‘fetch()’ to get data from API in javascript.



function setup(){
    createCanvas(600,300);

    bird1 = createSprite(200,150,20,20);
    bird1.addImage(bird_1.png);

    runner=  createSprite(150,300,20,30);
    runner.addImage(runner_Img);
    
    motorcar1 = createSprite (137,247,20,30);
    motorcar1.addImage(motorcar1_Img );


    motorcar2 = createSprite(237,127,30,30);
    motorcar2.addImage(motorcar2_Img);


    


}


function draw(){
    background("red");

    function PLAY(){
        
    }




    drawSprites();
}