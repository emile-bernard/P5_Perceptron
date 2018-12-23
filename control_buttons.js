function registerButtons() {
    document.getElementById("reset-btn").addEventListener("click", function () {
        resetGame();
    });

    document.getElementById("play-btn").addEventListener("click", function () {
        pause();
        document.getElementById("pause-btn").style.display = 'initial';
        document.getElementById("play-btn").style.display = 'none';
    });

    document.getElementById("pause-btn").addEventListener("click", function () {
        play();
        document.getElementById("play-btn").style.display = 'initial';
        document.getElementById("pause-btn").style.display = 'none';
    });
}

function resetGame() {
    location.reload(true);
}

function play() {

}

function pause() {

}