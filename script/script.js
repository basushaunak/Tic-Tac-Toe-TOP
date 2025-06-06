// JavaScript file for Tic-Tac-Toe


function playGame(){  
  let activePlayer = 0;
  let winner = -1;
  let players = [];
  const playerMovePrompt = document.querySelector("#player-move-prompt");
  const gameGrid = document.querySelector("#game-grid");
  players.push(createPlayer(document.querySelector("#player1").value,"X"));
  players.push(createPlayer(document.querySelector("#player2").value,"O"));
  document.querySelector("#game-in-progress").style.display = "block";
  showPrompt("Waiting for", players[activePlayer]);
    
  gameGrid.addEventListener("click",(e)=>{
    markGrid(e.target,players[activePlayer].marker);
  })

  function markGrid(cell,marker){
    if(cell.innerText === ""){
      cell.innerText = marker;
      activePlayer = activePlayer === 0 ? 1 : 0;
      showPrompt("Waiting for", players[activePlayer]);
      checkWinner();
    }
  }
  function checkWinner(){
    // returns -2 if Draw, -1 if still to be continued, 0 if plaaaaayer 1 won, 1 if player 2 won
  }
  function createPlayer(playerName, marker){
    return {playerName, marker};
  }
  function showPrompt(message, player){
    playerMovePrompt.innerText = `${message} ${player.playerName}`;
  }
}    

document.querySelector("#btn-start-game").addEventListener("click",(e)=>{
    playGame();
})

window.onload = ()=>{
  document.querySelector("#game-in-progress").style.display = "none";
}