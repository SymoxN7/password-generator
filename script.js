// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt("Password Length? Please choose between 10-64 characters")
  )
  if (isNaN(passwordLength) === true) {
    alert('Password must be entered as a number');
    return;
  }
  if (passwordLength < 10) {
    alert('Password must be at least 10 characters');
    return;
  }
  if (passwordLength > 64) {
    alert('Password must be at less than 65 characters');
    return;
  }

  let passLowChar = confirm('Lowercase Characters?')
  let passUppCase = confirm('Uppercase Characters?')
  let passNumbrs = confirm('Numeric Characters?')
  let passSpecChar = confirm('Special Characters?')

  if (passLowChar === false &&
    passUppCase === false &&
    passNumbrs === false &&
    passSpecChar === false) {
    alert('You must select at least one character type')
    return;
  }

  let passOptions = {
    passwordLength: passwordLength,
    passLowChar: passLowChar,
    passNumbrs: passNumbrs,
    passSpecChar: passSpecChar,
    passUppCase: passUppCase
  }
  return passOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomInd = Math.floor(Math.random() * arr.length)
  let randomEle = arr[randomInd]
  return randomEle
}
// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options)
  let result = []

  let possibleCharacters = []

  let chosenCharacters = []

  if (options.passSpecChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    chosenCharacters.push(getRandom(specialCharacters))
  }

  if (options.passLowChar) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    chosenCharacters.push(getRandom(lowerCasedCharacters))
  }

  if (options.passNumbrs) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    chosenCharacters.push(getRandom(numericCharacters))
  }

  if (options.passUppCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    chosenCharacters.push(getRandom(upperCasedCharacters))
  }

  for (let index = 0; index < options.passwordLength; index++) {
    var generatedChars = getRandom(possibleCharacters);
    result.push(generatedChars);
  }

  console.log(result)
  return result.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);