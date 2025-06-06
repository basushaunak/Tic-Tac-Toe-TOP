// JavaScript file for Tic-Tac-Toe


function playGame(){  
  let activePlayer = 0;
  let players = [];
  let gameGridArray = [];
  let gameOver = false;
  const playerMovePrompt = document.querySelector("#player-move-prompt");
  const gameGrid = document.querySelector("#game-grid");
  players.push(createPlayer(document.querySelector("#player1").value,"X"));
  players.push(createPlayer(document.querySelector("#player2").value,"O"));
  document.querySelector("#game-in-progress").style.display = "block";
  showPrompt("Waiting for", players[activePlayer]);
  document.querySelector("#btn-start-game").style.display = "none";
  initGrid();
  gameGrid.addEventListener("click",(e)=>{
    if(!gameOver){
      markGrid(e.target,players[activePlayer].marker);
    }
  })

  function markGrid(cell,marker){
    if(cell.innerText === ""){
      cell.innerText = marker;
      fillArray(Number(cell.id[4]));
      activePlayer = activePlayer === 0 ? 1 : 0;
      showPrompt("Waiting for", players[activePlayer]);
      let winner = checkWinner();
      if(winner === -2){
        //Draw
        showPrompt("Game Drawn!");
        gameOver = true;
        document.querySelector("#btn-start-game").innerText="Play Again";
        document.querySelector("#btn-start-game").style.display = "block";
      }else if(winner=== 0 || winner === 1){
        //Winner, game over
        showPrompt("Game won by:",players[winner]);
        gameOver = true;
        document.querySelector("#btn-start-game").innerText="Play Again";
        document.querySelector("#btn-start-game").style.display = "block";
      }
    }
  }

  function fillArray(idx){
    let row = Math.floor(idx/3);
    let col = idx % 3;
    gameGridArray[row][col] = activePlayer;
  }

  function checkWinner(){
    // returns -2 if Draw, -1 if still to be continued, 0 if plaaaaayer 1 won, 1 if player 2 won
    for(let i = 0;i<2;i++){
      if(gameGridArray[i][0] === gameGridArray[i][1] && gameGridArray[i][0] === gameGridArray[i][2]){
        return gameGridArray[i][0];
      }
    }
    for(let i = 0;i<2;i++){
      if(gameGridArray[0][i] === gameGridArray[1][i] && gameGridArray[0][i] === gameGridArray[2][i]){
        return gameGridArray[0][i];
      }
    }
    if(gameGridArray[0][0] === gameGridArray[1][1] && gameGridArray[0][0] === gameGridArray[2][2]){
      return gameGridArray[0][0];
    }

    if(gameGridArray[0][2] === gameGridArray[1][1] && gameGridArray[0][2] === gameGridArray[2][0]){
      return gameGridArray[0][2];
    }

    if(gameGridArray.includes(-1)){
      return -2;
    }
    return -1;
  }
  function createPlayer(playerName, marker){
    return {playerName, marker};
  }
  function showPrompt(message, player){
    if(player){
      playerMovePrompt.innerText = `${message} ${player.playerName}`;
    }else{
      playerMovePrompt.innerText = `${message}`;
    }
  }
  function initGrid(){
    for(let i=0;i<3;i++){
    gameGridArray[i]=[];
    for(let j=0;j<3;j++){
      gameGridArray[i].push(-1);
    }
    const gameCells = document.querySelectorAll(".game-cell");
    gameCells.forEach(gameCell =>{
      gameCell.innerText="";
    })
  }
  }
}    

document.querySelector("#btn-start-game").addEventListener("click",(e)=>{
    playGame();
})

window.onload = ()=>{
  document.querySelector("#game-in-progress").style.display = "none";
}