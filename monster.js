let randomNumber;
let myDur;
let myPos;
const root = document.documentElement;
const lightning = document.getElementById('lightning');
const head = document.getElementById('head');
const eyes = document.getElementById('eyes');
const nose = document.getElementById('nose');
const mouth = document.getElementById('mouth');
const myAudio = document.getElementById('thunder');
const monsterButton = document.getElementById('monsterButton');
monsterButton.addEventListener("click",makeMe);

//Random lightning
randomLight = Math.floor(Math.random()*3);
let myLight = "url(light" + randomLight + ".jpg)";
lightning.style.setProperty("background-image", myLight);


function makeMe() {
var audio = new Audio('https://fi67.github.io/monster_finish/thunder.mp3');

    randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    myDur = 0.5 * randomNumber;
    myPos = 367 * randomNumber;
    root.style.setProperty('--positionHead', myPos + "px");
    head.style.setProperty('animation-duration', myDur + 's');
    head.style.setProperty("animation", "none");
    head.offsetHeight;
    head.style.setProperty("animation", null);
       
    randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    myDur = 0.5 * randomNumber;
    myPos = 367 * randomNumber;
    root.style.setProperty('--positionEyes', myPos + "px");
    eyes.style.setProperty('animation-duration', myDur + 's');    
    eyes.style.setProperty("animation", "none");
    eyes.offsetHeight;
    eyes.style.setProperty("animation", null);
    
    randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    myDur = 0.5 * randomNumber;
    myPos = 367 * randomNumber;
    root.style.setProperty('--positionNose', myPos + "px");
    nose.style.setProperty('animation-duration', myDur + 's');
    nose.style.setProperty("animation", "none");
    nose.offsetHeight;
    nose.style.setProperty("animation", null);
    
    randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    myDur = 0.5 * randomNumber;
    myPos = 367 * randomNumber;   
    root.style.setProperty('--positionMouth', myPos + "px"); 
    mouth.style.setProperty('animation-duration', myDur + 's');
    mouth.style.setProperty("animation", "none");
    mouth.offsetHeight;
    mouth.style.setProperty("animation", null);
    audio.play();
}
