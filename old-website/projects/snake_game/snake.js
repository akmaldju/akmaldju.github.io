/*
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

let interval = 150;

const ground = new Image();
ground.src = "img/ground.png";

let foodImg = new Image();
foodImg.src = "img/food.png";


let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}


let score = 0;

document.addEventListener("keydown", direction);

let d;

function direction(event){
    if(event.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
    }else if(event.keyCode == 38 && d != "DOWN"){
        d = "UP";
    }else if(event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
    }else if(event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }
}

function collision(head,array){
    for(let i=1; i < array.length; i++){ 
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

function draw(){
    ctx.drawImage(ground,0,0);

    for(let i=0; i<snake.length; i++){ 
        ctx.fillStyle = (i == 0)? "green":"white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }


    ctx.drawImage(foodImg, food.x, food.y);


    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y){
        foodImg.src = "img/food.png";
        score++;
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        for(let i=0; i<snake.length; i++){
            if(food.x == snake[i].x && food.y == snake[i].y){
                foodImg.src = "img/food_2.png";
            }
        }
         
    }else{
        snake.pop();
    }

    if(snakeX < box || snakeX >17 * box || snakeY <3*box || snakeY > 17*box){
        clearInterval(game);
    }

    if(collision(snake[0],snake)){
        clearInterval(game);
    }


    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    //snake.pop();

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    snake.unshift(newHead);


    ctx.fillStyle = "white";
    ctx.font = "45px Change one";
    ctx.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,interval);