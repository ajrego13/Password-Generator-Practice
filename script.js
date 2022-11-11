const passwordEl = document.getElementById('password');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'; 
const numbers = '1234567890';
const symbols = "!@#$%&-"; 



const getRandomLowerCase = () => {
   return randomlower = lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
}
const getRandomUpperCase = () => {
    const uppercaseLetters = lowerCaseLetters.toUpperCase(); 
    return randomUpper = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length))
}
const getRandomSymbol = () => {
    return symbols.charAt(Math.floor(Math.random() * symbols.length)); 
}
const getRandomNumber = () => {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

const generatePassword = () => {
    let length = lengthEl.value
    let password = ''
    uppercaseEl.checked ? password += getRandomUpperCase() : '';
    lowercaseEl.checked ? password += getRandomLowerCase() : ''; 
    symbolsEl.checked ? password += getRandomSymbol() : ''; 
    numbersEl.checked ? password += getRandomNumber() : '';
   
    for (let i = password.length; i < length; i++) {
         password += generateX();
    }
    return passwordEl.innerText = password;
}

const generateX = () => {
    let x = ''; 
    uppercaseEl.checked ? x += getRandomUpperCase() : '';
    lowercaseEl.checked ? x += getRandomLowerCase() : ''; 
    symbolsEl.checked ? x += getRandomSymbol() : ''; 
    numbersEl.checked ? x += getRandomNumber() : '';
   return x.charAt(Math.floor(Math.random() * x.length)); 
  
   
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    let textarea = document.createElement('textarea')
    
    textarea.value = passwordEl.innerText
    document.body.appendChild(textarea);
   textarea.select()
    document.execCommand('copy'); 
    textarea.remove()
    alert('Password copied to clipboard');
})






