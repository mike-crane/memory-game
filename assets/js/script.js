/*========================================================
GOALS

    - Use jQuery to make tiles flip

    - Programm tiles that do not match to flip back over and those that do match to remain flipped

    - Program clock to start when page is loaded

    - Program board to reset tile positions  after predetermined number of attempts
=========================================================- */




//======= Declare Variables =======================//

    var iconArray = ['assets/img/A.ico','assets/img/A.ico','assets/img/B.ico','assets/img/B.ico','assets/img/C.ico','assets/img/C.ico','assets/img/D.ico','assets/img/D.ico','assets/img/E.ico','assets/img/E.ico','assets/img/F.ico','assets/img/F.ico','assets/img/G.ico','assets/img/G.ico','assets/img/H.ico','assets/img/H.ico','assets/img/I.ico','assets/img/I.ico'];

    var storage = [];
    var tileKey = [];
    var numFlipped = 0;

// ==============  Apply Randomizer Thingamabober ========= //

Array.prototype.gameBoardReset = function() {
    var i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

// function shuffle() {
// 	return 0.4 - Math.random();
// }

function boardRefresh() {
	numFlipped = 0;
	var output = '';
    iconArray .gameBoardReset();
	for(var i = 0; i < iconArray .length; i++){
		output += '<div id="tile_'+i+'" onclick="tileOver(this,\''+iconArray [i]+'\')"></div>';
	}
	document.getElementById('mainBoard').innerHTML = output;
}

function tileOver(tile,val){
	if(tile.innerHTML === "" && storage.length < 2){
		tile.style.background = '#fff';
    tile.innerHTML = '<img src="' + val + '" style="padding: 15px;" />';
		if(storage.length === 0){
			storage.push(val);
			tileKey.push(tile.id);
		} else if(storage.length == 1){
			storage.push(val);
			tileKey.push(tile.id);
			if(storage[0] === storage[1]){  // ==== reset array number ====== //
				numFlipped += 2;

				storage = [];
            	tileKey = [];

				if(numFlipped === iconArray .length){  // == modal when board clears == //
					alert("CONGRATULATIONS!  YOU WON!");
					document.getElementById('mainBoard').innerHTML = "";
					boardRefresh();
				}
			} else {
				function returnFlip(){

				    var tile_1 = document.getElementById(tileKey[0]);
				    var tile_2 = document.getElementById(tileKey[1]);
				    tile_1.style.background = 'cadetblue no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'cadetblue no-repeat';
            	    tile_2.innerHTML = "";

        // function returnFlip() {
        // 	if (isMatchPattern()) {
        // 		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
        // 			if(document.webkitTransitionEnd){
        // 				$(".card-removed").bind("webkitTransitionEnd",	removeTookCards);
        // 			}else{
        // 				removeTookCards();
        // 			}
        // 		} else {
        // 		$(".card-flipped").removeClass("card-flipped");
        // 	}

				    storage = [];
            	    tileKey = [];
				}
				setTimeout(returnFlip, 700);
			}
		}
	}
}


// =========== clock triggered on page load  ======================= //

var firstHand = document.getElementById("minutes");
var secondHand = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime()
{
    ++totalSeconds;
    secondHand.innerHTML = pad(totalSeconds%60);
    firstHand.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

// function timer() {
// 				//alert("timer set")
// 				if (playGame) {
// 					scoreTimeout = setTimeout(function() {
// 						uiScore.html(++score + " seconds");
// 						timer();
// 					}, 1000);
