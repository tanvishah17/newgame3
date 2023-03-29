var jackImg, jack;
var bgImg, bg,beanstalk, beanstalkImg;
var obstacle1, obstacle2, reward1, reward2, reward3;
var obstacle1Img, obstacle2Img, reward1Img, reward2Img, reward3Img;
var treasure, hen, cloud, ground;
var treasureImg, henImg, cloudImg, groundImg;
var lives = 3, score = 0;

function preload(){
jackImg = loadAnimation("images/jack.png","images/jack_reverse.png");
beanstalkImg = loadImage("images/beanstalk.png");
bgImg = loadAnimation("images/sky-clouds_gif.gif");
obstacle1Img = loadImage("images/thorn.png");
obstacle2Img = loadImage("images/obstacle_2.png");
reward1Img = loadImage("images/reward_1.png");
reward2Img = loadImage("images/reward_2.png");
reward3Img = loadImage("images/reward_3.png");
treasureImg = loadImage("images/treasure.png");
hen = loadImage("images/goldenegg_hen.png");
cloud = loadImage("images/castle_cloud.jpeg");
ground = loadImage("images/ground.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);
  
//background image
bg = createSprite(400,400,900,400)
bg.addAnimation("moving_clouds",bgImg);
bg.scale = 1.8;

jack = createSprite(400,700,90,90);
jack.addAnimation("climbing",jackImg);
jack.scale = 0.4;

beanstalk = createSprite(400,710,80,500)
beanstalk.addImage(beanstalkImg)
beanstalk.y = beanstalk.height/2;

obstacleGroup = new Group();
rewardGroup = new Group();
/*treasure = createSprite(600,500,20,20);
treasure.addImage(treasureImg);
treasure.scale = 0.4;*/

}

function draw() {

  fill("black")
     text("Score: "+ score, 400,500);
     text("Lives: "+ lives, 500,500);
     
    if(keyDown("RIGHT_ARROW")){
      jack.x += 2;
    }

    if(keyDown("UP_ARROW")){
      jack.y -= 2;
    }

    if(keyDown("LEFT_ARROW")){
      jack.x -= 2;
    }

    if (beanstalk.y < 0){
      beanstalk.y = beanstalk.height/2;
    }

    if(jack.isTouching(obstacleGroup)){
      lives -= 1;
    }

    if(jack.isTouching(rewardGroup)){
        score += 10;
    }

    if(jack.isTouching(rewardGroup) && lives<3){
       lives++;
  }

    

          spawnObstacles();
           spawnRewards();
   

        drawSprites();
        
}
function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(Math.round(random(200,700)),600,25,25)
    obstacle.velocityY = -(10);
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(obstacle1Img);
              break;
      case 2: obstacle.addImage(obstacle2Img);
              break;
      default: break;
    }
    obstacle.lifetime = 500;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
  
}

function spawnRewards(){
if(frameCount % 80 === 0){
  var reward = createSprite(Math.round(random(300,600)),600,25,25)
  reward.velocityY = -(10);
  var rand1 = Math.round(random(1,2,3));
  switch(rand1){
    case 1: reward.addImage(reward1Img);
    break;
    case 2: reward.addImage(reward2Img);
    break;
    case 3: reward.addImage(reward3Img);
    break;
    deafult: break;
  }

  reward.lifetime = 500;
  reward.scale = 0.2;
  rewardGroup.add(reward);

}

}