canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car 1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car 2.png";
car2_x=10;
car2_y=10;
background_image="race.jpeg";

function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

car1_imgtag=new Image();
car1_imgtag.onload=uploadcar1;
car1_imgtag.src=car1_image;

car2_imgtag=new Image();
car2_imgtag.onload=uploadcar2;
car2_imgtag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uploadcar1(){
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width,car1_height);

}
function uploadcar2(){
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width,car2_height);

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        car1_up();
        console.log("up arrow key");

    }

    if(keypressed=="40"){
        car1_down();
        console.log("down arrow key");

    } 
    
    if(keypressed=="37"){
        car1_left();
        console.log("left arrow key");

    }

    if(keypressed=="39"){
        car1_right();
        console.log("right arrow key");

    }

    if(keypressed=="87"){
        car2_up();
        console.log("w key");

    }

    if(keypressed=="65"){
        car2_left();
        console.log("left key");

    }

    if(keypressed=="68"){
        car2_right();
        console.log("d key");

    }

}

function car1_up()
{
    if (car_y>= 0)
    {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, X = " + car1_x +"| y =" +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }

}

function car1_down()
{
    if (car_y>=500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, X = " + car1_x +"| y =" +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }

}

function car1_left()
{
    if (car_x>=0)
    {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, X = " + car1_x +"| y =" +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }

}

function car1_right()
{
    if (car_x<= 700)
    {
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed, X = " + car1_x +"| y =" +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }

}