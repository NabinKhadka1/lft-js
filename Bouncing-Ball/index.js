const ball = document.createElement('div')

const body = document.querySelector('body')

ball.style.width = '50px'
ball.style.height = '50px'
ball.style.borderRadius = '25px'
ball.style.background = 'blue'
ball.style.position = 'absolute'
ball.style.top = '0px'
ball.style.left = '45%';

body.appendChild(ball)

//Ball bounce bottom value
let ballHeight = parseInt(ball.style.height)
let bottomHeight = 500 - ballHeight

//Ball bounce top value
let topHeight = ballHeight + parseInt(ball.style.top)

let moveDown = true

const topValue = 4
function moveBall(){
    if (moveDown){
        ball.style.top = parseInt(ball.style.top) + topValue + 'px'
        if (parseInt(ball.style.top) >= bottomHeight) {
            moveDown = false
        }
    }
    
    if(!moveDown){
        ball.style.top = parseInt(ball.style.top) - topValue + 'px'
        if(parseInt(ball.style.top) <= 0) {
            moveDown = true
        }
    }
}

const interval = setInterval(moveBall,1000/60);