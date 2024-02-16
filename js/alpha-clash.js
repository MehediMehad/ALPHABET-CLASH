
function handleKeyboardButtonPrees(event) {
    const playerPressed = event.key;
    const caurrentAlphabetElement = document.getElementById('current-alphabet')
    const caurrentAlphabet = caurrentAlphabetElement.innerText;
    const expectedAlphabet = caurrentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

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
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame();
}
