var x = document.getElementById("playAudio");
var y = document.getElementById("playButton");
var z = document.getElementById("stopButton");
z.style.display = "none";
function playAudio() {
    x.play();
    y.style.display = "none";
    z.style.display = "block";
}

function stopAudio() {
    x.pause();
    y.style.display = "block";
    z.style.display = "none";
}