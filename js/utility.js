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

function setBgColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-500');
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-500');
}
 function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    const rendomNumber = Math.random() *25;
    const index = Math.round(rendomNumber)
    const alphabet = alphabets[index]; 
    return alphabet;
 } 
