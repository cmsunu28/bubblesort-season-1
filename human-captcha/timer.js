// la la la copying and pasting and editing from stack overflow is my jam

var i = 8*60;

function startTimer() {

    var countdownTimer = setInterval(function() {

        var min=((i-(i%60))/60);
        var sec=i%60;
        if (sec<10) {sec="0"+sec;}
        console.log(min+':'+sec);
        i = i - 1;

        if (i <= 0) {
            clearInterval(countdownTimer);
        }

    }, 1000);

}

startTimer(); 