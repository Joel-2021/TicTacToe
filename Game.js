class Game {
  constructor() {
    this.turn = "X";
    this.board = Array(9).fill(null); 
  }

  nextTurn() {                                                           
  // this.turn=this.turn==='X'?'O':'X'
  if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
    document.getElementById("turn").innerHTML = this.turn + "'s turn";
  }

  makeMove(i) {                                                          
    if (!this.isInProgress()) return;
    if (this.board[i]) return;
    this.board[i] = this.turn;
    if (!this.findWinningCombination()) {
      this.nextTurn();
    }
  }

  findWinningCombination() {
    const WinningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (const combination of WinningCombination) {
      const [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        document.getElementsByClassName("tile")[a].style.color = "green";
        document.getElementsByClassName("tile")[b].style.color = "green";
        document.getElementsByClassName("tile")[c].style.color = "green";
        document.getElementById("status").innerText =
          this.turn + " is the winner";
        return combination;
      }
    }

    return;
  }

  isInProgress() {
    if (!this.findWinningCombination() && this.board.includes(null)) {
      document.getElementById("status").innerText = "in progress";
      return true;
    }
     
  }

  update() {
    document.querySelectorAll(".tile").forEach((element) =>
      element.addEventListener("click", function () {
        var tileindex = element.getAttribute("data-index");
        console.log(tileindex);
        var a = document.getElementsByClassName("tile");
        console.log(a);
        if (game.findWinningCombination()) return;
        if (!game.findWinningCombination() && !game.board.includes(null))
         return (document.getElementById("status").innerText = "its a tie");
        a[tileindex].innerHTML = game.turn;
        game.makeMove(tileindex);
        console.log(game.board);
        console.log(game.findWinningCombination());
      })
    );
  }
}

game = new Game();
game.update();

// document.querySelectorAll(".tile").forEach((element) =>
//   element.addEventListener("click", function () {

//     var tileindex = element.getAttribute("data-index");
//     console.log(tileindex);
//     var a=document.getElementsByClassName("tile")
//     console.log(a)
//     a[tileindex].innerHTML=game.turn
//     game.makeMove(tileindex)
//     console.log(game.board);
//     console.log(game.findWinningCombination());

//   })
// );

// function showDetails(tile) {
//   var tileindex = tile.getAttribute("data-index");
//   // console.log("The " + tile.innerHTML + " is at " + tileindex + ".");
//   console.log(tileindex)
//   var a=document.getElementsByClassName("tile")
//   // console.log(a)
//   a[tileindex].innerHTML=game.turn
//   game.makeMove(tileindex)
//   console.log(game.board);
//   console.log(game.findWinningCombination())

// }
