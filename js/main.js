window.addEventListener('load', init);
//globals variables
//available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}

//to change levels
const curretlevel = levels.easy;
let time = curretlevel;
let score = 0;
let isplaying;

//dom elements
const wordinput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoredisplay = document.querySelector('#score');
const timedisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'sushil',
    'gaming',
    'lucky',
    'foxing',
    'trying',
    'posting',
    'budding',
    'programmer',
    'coder',
    'gamedeveloper',
    'counting',
    'school',
    'zoya',
    'soyabean',
    'spaceket',
    'organization',
    'goodevening',
    'goodmorning',
    'sample',
    'randomletters',
    'purchase',
    'icancode',
    'sofware',
    'motherboard',
    'siblings',
    'nutrition',
    'establishment',
    'generate',
    'javascript'
];
//initialize init () function
function init(){
    //show number of seconds
    seconds.innerHTML = curretlevel;
    //load word from array
    showword(words);
    //starts matching on word input
    wordinput.addEventListener('input', startmatch);
    //call contdown every seconds
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkstatus, 50);
}
//start match
function startmatch(){
    if(matchwords()){
        isplaying = true;
        time = curretlevel + 1;
        showword(words);
        wordinput.value = '';
        score++;

    }
    if(score === -1){
        scoredisplay.innerHTML = 0;

    }else{
        scoredisplay.innerHTML = score;
    }
}
//match the current word
function matchwords(){
    if(wordinput.value === currentword.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }

}

//pick and show randow word
function showword(words){
    //generate random array index
    const randindex = Math.floor(Math.random() * words.length);
    currentword.innerHTML = words[randindex];

}
//countdown timer
function countdown(){
    if(time > 0){
        //decrement
        time--;

    }else if(time === 0){
        isplaying = false;
    }
    //show time
    timedisplay.innerHTML = time;
}
//check game status
function checkstatus(){
    if(!isplaying && time === 0){
        message.innerHTML = "Game over!!!";
        score = -1;
    }
}