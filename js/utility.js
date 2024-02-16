// Hide the Element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// Show the Element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

 function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    const rendomNumber = Math.random() *25;
    const index = Math.round(rendomNumber)

    const alphabet = alphabets[index]
    return alphabet;
 } 