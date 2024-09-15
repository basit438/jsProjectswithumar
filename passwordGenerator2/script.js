let pass = document.querySelector('#Password');
let passGen = document.querySelector('#generator-btn');
let copyBtn = document.querySelector('#copy-btn');
let copyMessage = document.querySelector('#copy-message');
let UPPERCASE = "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmniopqrstuvwxyz";
let symbol = "@!`()[]%#*/&^><+=,.";
let num = "1234567890";

// Function to generate password
function generatePass(length, includeUppercase, includeLowercase, includeSymbols, includeNumbers) {
    let availableChars = '';
    let generatedPass = '';

    // Add characters based on user selection
    if (includeUppercase) availableChars += UPPERCASE;
    if (includeLowercase) availableChars += lowercase;
    if (includeSymbols) availableChars += symbol;
    if (includeNumbers) availableChars += num;

    // Ensure at least one character type is selected
    if (availableChars === '') {
        alert('Please select at least one character type');
        return '';
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        generatedPass += availableChars[Math.floor(Math.random() * availableChars.length)];
    }

    return generatedPass;
}

// Event listener for generating password
passGen.addEventListener('click', function () {
    // Get user inputs
    let length = parseInt(document.querySelector('#length').value);
    let includeUppercase = document.querySelector('#uppercase').checked;
    let includeLowercase = document.querySelector('#lowercase').checked;
    let includeSymbols = document.querySelector('#symbols').checked;
    let includeNumbers = document.querySelector('#numbers').checked;

    // Generate the password
    let newPass = generatePass(length, includeUppercase, includeLowercase, includeSymbols, includeNumbers);
    
    // Set the generated password to the input field
    if (newPass) {
        pass.value = newPass;
    }
});

// Copy password to clipboard
copyBtn.addEventListener('click', function() {
    if (pass.value) {
        // Select the password text and copy it to clipboard
        pass.select();
        pass.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');

        // Show a confirmation message
        copyMessage.textContent = "Password copied to clipboard!";
        setTimeout(() => {
            copyMessage.textContent = '';
        }, 3000);
    } else {
        copyMessage.textContent = "No password to copy!";
        setTimeout(() => {
            copyMessage.textContent = '';
        }, 3000);
    }
});
