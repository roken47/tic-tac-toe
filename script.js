let currentPlayer = "X"; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [7, 5, 3],
  [2, 5, 8],
  [3, 6, 9],
];
function checkForWin(winningCombinations, playerSelections) {
  for (i = 0; i < winningCombinations.length; i++) {
    let currentCombination = winningCombinations[i];
    console.log(winningCombinations);
  }
  for (j = 0; j < currentCombination.length; j++) {
    let currentSelection = currentCombination[j];
    console.log(currentSelection);
  }
}
// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll(".grid-cell");
// Loop over each element in our cellElementArray:
for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
  const currentCellElement = cellElementArray[elementIndex];
  // Add an event listener to the currentCellElement:
  currentCellElement.addEventListener("click", function (event) {
    // event.target tells us which element the user clicked (see Resources links below):
    const clickedCellElement = event.target;
    // Log the ID of the cell which was just clicked:
    console.log("You clicked on cell number: " + clickedCellElement.id);
  });
}
/*
function for checking for win using a for loop
            instruct of course func to above event listener so listener can call func
    func might need an if statement to check for current === or == winning combo
currentCellElement needs if statements for embedding X or O

if satement uses push to click cell el and click cell el.innerhtml

if (currentPlayer === 'x') {clickedCellElement.innerHTML = 'X'; 
playerXSelections.push(clickedCellElement.id);
let result = checkForWin(winningCombinations, playerXSelections)}
*/
