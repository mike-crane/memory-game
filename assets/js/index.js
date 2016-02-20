/*========================================================
GOALS

    - Use jQuery to make tiles flip

    - Programm tiles that do not match to flip back over and those that do match to remain flipped

    - Program clock to start when page is loaded

    - Program board to reset tile positions  after predetermined number of attempts
=========================================================- */

// declare variables
var memory-game-array = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6']; // array representing game tiles
var game-values = [];  // to store game values
var tile-ids = [];  // to store the id of each game tile
var flipped-tiles = 0;  // to keep track of number of tiles that are flipped
