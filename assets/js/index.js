/*========================================================
GOALS

    - Use jQuery to make tiles flip

    - Programm tiles that do not match to flip back over and those that do match to remain flipped

    - Program clock to start when page is loaded

    - Program board to reset tile positions  after predetermined number of attempts
=========================================================- */

// =========== clock triggered on page load  ======================= //
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime()
{
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
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

// ====================================================== //
