function handleKeyboardButtonPrees(event) {
    const playerPressed = event.key;
    const caurrentAlphabetElement = document.getElementById('current-alphabet')
    const caurrentAlphabet = caurrentAlphabetElement.innerText;
    const expectedAlphabet = caurrentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('Gaot a poin');
        continueGame();
        removeBgColorById(expectedAlphabet)
    }
    else{
        console.log('die');
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
