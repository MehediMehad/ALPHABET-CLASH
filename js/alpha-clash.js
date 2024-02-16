function continueGame() {
    const alphabet = getARandomAlphabet();
    const caurrentAlphabetElement =document.getElementById('current-alphabet')
    caurrentAlphabetElement.innerText = alphabet;
}
function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
