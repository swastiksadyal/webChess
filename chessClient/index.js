const api_url = "http://127.0.0.1:5000/game";
const table = document.getElementById("board") 

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const boardStr = data.board
    return boardStr
}

function createBoard(fen){
    const rows = fen.split('/');

  // Create a 2D array to represent the board
  const board = new Array(8).fill().map(() => new Array(8).fill(null));

  // Loop through each square on the board
  let row = 0;
  let col = 0;
  for (let i = 0; i < rows.length; i++) {
    const rowString = rows[i];
    for (let j = 0; j < rowString.length; j++) {
      const char = rowString[j];
      if (/[1-8]/.test(char)) {
        // If the character is a number, skip that many squares
        col += parseInt(char);
      } else {
        // Otherwise, add the piece to the board
        board[row][col] = char;
        col++;
      }
    }
    row++;
    col = 0;
  }

  return board;
}

let b = getData();
console.log(b.board)