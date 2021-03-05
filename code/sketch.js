var car, car_image,


function preload() {
    
    car_image = loadImage("car.jifif");

}

function setup() {
 createCanvas(600, 200);
 background("grey");

    car = createSprite(300, 200, 50, 20);
    car.addImage(car_image);
    car.scale = 0.5

}

function draw() {
 


    drawSprites();
}