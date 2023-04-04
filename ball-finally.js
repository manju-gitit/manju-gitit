//Set global variable that would contain the position, velocity and the html element "ball"
var position = 0;
var velocity = 10;
var ball = document.getElementById('ball');
var positionX = 0;
var reverse = false;
var positionY = 0;
var reverseX = false;
var reverseY = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 200;
  if(!(reverseX))  {
        positionX = positionX + velocity;  
        //ball.style.backgroundColor('blue');    
        ball.style.left = positionX + 'px';
        console.log("in x if: ")
  }else {
        positionX = positionX - velocity;
        ball.style.left = positionX + 'px'; 
        console.log("in x else: ")   
  }

 if(!(reverseY ))  {
    positionY = positionY + velocity;  
    //ball.style.backgroundColor('green');
    ball.style.top = positionY + 'px';
    console.log("in y if: ")
  }else {
      positionY = positionY - velocity;
      //ball.style.backgroundColor('yellow');
      ball.style.top = positionY + 'px';
      console.log("in y else: ")
  }
  
  if((positionX > Xmax) || 
    (positionX === Xmin)) 
  {
    reverseX = !reverseX;
  }

  if((positionY > Ymax) ||
  (positionY === Ymin)){
    reverseY = !reverseY;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);