// JavaScript file for Tic-Tac-Toe
const gameGrid = document.querySelector("#game-grid");
const player1 = {};
const player2 = {};

const Player = function (name,marker) {
    return {name,marker};
}


function initGame(){
    player1 = new Player(document.querySelector("#player1","X"));
    player2 = new Player(document.querySelector("#player2","O"));
}

document.querySelector("btn-start-game".addEventListener("click",(e)=>{
    initGame();
}))

gameGrid.addEventListener("click",(e)=>{
    markGrid(e.target,player);
})