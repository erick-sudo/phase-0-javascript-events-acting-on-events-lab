// Your code here
let dodger = document.querySelector("#dodger")
let obstacles = []
const playground = document.querySelector("#game")

function moveDodgerLeft(){
    const left = parseInt(dodger.style.left.replace("px",""), 10)
    if(left>0){
        dodger.style.left = `${left-10}px`
    }

}

function moveDodgerRight(){
    const left = parseInt(dodger.style.left.replace("px",""), 10)
    if(left<360){
        dodger.style.left = `${left+10}px`
    }
}

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if(event.key === "ArrowRight") {
        moveDodgerRight();
    }
})

function launchObstacles(){
    for(let i=0;i<10;i++){
        let obstacle = document.createElement("div")
        obstacle.setAttribute("class", "obstacles")
        obstacle.setAttribute("id", `obstacle${i}`)
        obstacle.style.left = `${Math.floor(Math.random()*100)%5}px`
        obstacles.push({id: `obstacle${i}`, speed: Math.floor(Math.random()*100)%5})
        playground.append(obstacle);
    }
}

launchObstacles()