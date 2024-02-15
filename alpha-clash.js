// function play() {
//     // step-1 hide the home screen to hide screen add the class hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     // step-2 show play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player press',playerPressed);

    // stop the game if press 'Esc'
    if (playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log(playerPress,expectedAlphabet);
// checked matched or not
if (playerPressed===expectedAlphabet){
    console.log('you got a point');
    // console.log('you have pressed correctly', expectedAlphabet);

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1
    setTextElementValueById = ('current-score',updatedScore)

   
    // update score:
    // 1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // 2.increase the score by 1
    const newScore = currentScore + 1;

    // 3.show the update
    currentScoreElement.innerText = newScore;
// start a new round

    removeBackgroundColorById(expectedAlphabet);
    continueGame();

}
else{
     console.log('please press the right key');
     const currentLife = getTexElementValueById('current-life');
     const updatedLife = currentLife - 1;
     setTextElementValueById('current-life',updatedLife)

     if(updatedLife === 0 ){
        gameOver();
     }

    // // step-1 get the current Life number
    //  const currentLifElement = document.getElementById('current-life');
    //  const currentLifText = currentLifElement.innerText;
    //  const currentLife = parseInt(currentLifText);
    // //  
    // // step-2 reduce the life count
    //  const newLife = currentLife - 1;

    // // step-3 display the update life count
    // currentLifElement.innerText = newLife;
}
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function continueGame() {
    // step-1 generate a random alphabet
    const alphabet = getARandomAlphabet()
    // console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}

function play (){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    // 1 get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}