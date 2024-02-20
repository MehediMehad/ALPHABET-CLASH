
function handleKeyboardButtonPrees(event) {
    const playerPressed = event.key;
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const caurrentAlphabetElement = document.getElementById('current-alphabet')
    const caurrentAlphabet = caurrentAlphabetElement.innerText;
    const expectedAlphabet = caurrentAlphabet.toLocaleLowerCase();


    if (playerPressed === expectedAlphabet) {
        const caurrentScore = getTextElementValueById('score')
        const newScore = caurrentScore + 1 ;
        setTextElementValueById('score', newScore)

        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const caurrentLife = getTextElementValueById('life')
        const newLife = caurrentLife - 1
        setTextElementValueById('life', newLife);
        if (newLife === 0) {
            gameOver();
        }
    }
 }

document.addEventListener('keyup', handleKeyboardButtonPrees)

function continueGame() {
    const alphabet = getARandomAlphabet();
    const caurrentAlphabetElement =document.getElementById('current-alphabet')
    caurrentAlphabetElement.innerText = alphabet;
    setBgColorById(alphabet)
 
}
function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);
    continueGame();
}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('score');
    setTextElementValueById('last-score', lastScore);
    const caurrentAlphabet = getElementTextById('current-alphabet')
    console.log(caurrentAlphabet);
    removeBgColorById(caurrentAlphabet)
}