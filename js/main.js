let pantalla = document.getElementById("actionScreen");
let lastState = false;
let stateOn = true;
document.addEventListener("click", (e) => {
    if (stateOn != lastState) {
        stateOn = lastState;
    }
    if (stateOn == true && e.target.id === 'actionOnOff') {
        lastState = false;
        ledTop.style.backgroundColor = "black";
        pantalla.style.backgroundImage = "";
        var audio = document.getElementById('myAudio2');
        audio.play();
    };
    if (stateOn == true && e.target.id === 'actionTop') {
        pantalla.style.backgroundImage = "url('./img/top.png')";
    }
    if (stateOn == true && e.target.id === 'actionBottom') {
        pantalla.style.backgroundImage = "url('./img/bottom.png')";
    }
    if (stateOn == true && e.target.id === 'actionRight') {
        pantalla.style.backgroundImage = "url('./img/right.png')";
    }
    if (stateOn == true && e.target.id === 'actionLeft') {
        pantalla.style.backgroundImage = "url('./img/left.png')";
    }
    if (stateOn == true && e.target.id === 'actionA') {
        pantalla.style.backgroundImage = "url('./img/a-1-trans.png')";
    }
    if (stateOn == true && e.target.id === 'actionB') {
        pantalla.style.backgroundImage = "url('./img/b-1-trans.png')";
    }
    if (stateOn == true && e.target.id === 'actionStart') {
        pantalla.style.backgroundImage = "url('./img/select-1-trans.png')";
    }
    if (stateOn == true && e.target.id === 'actionSelect') {
        pantalla.style.backgroundImage = "url('./img/start-1-trans.png')";
    }
    if (stateOn == false && e.target.id === 'actionOnOff') {
        lastState = true;
        ledTop.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url('./img/on-1-trans.png')";
        var audio = document.getElementById('myAudio');
        audio.play();
    };
});
