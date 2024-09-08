let boxes = document.querySelectorAll(".boxes")
let newGamebtn = document.querySelector("#newGame-btn")
let resetGamebtn = document.querySelector("#reset-btn")
let winSec = document.querySelector(".winPanel")
let winnerName = document.querySelector("#winner")

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let turnO = true;
count = 0;
boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gameDraw();
        }
    });
});

const checkWinner =  () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if (pos1Val == pos2Val && pos2Val == pos3Val){
        showWinner(pos1Val);
        return true;
   }
  }
 }
}

const showWinner = (winner) => {
    winnerName.innerText = `Congratualations, Winner is ${winner}`;
    winSec.classList.remove("hide");
    disableBoxes();
}

const disableBoxes= () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const gameDraw = () => {
    winnerName.innerText = `Game was a Draw.`
    winSec.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    winSec.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

resetGamebtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);