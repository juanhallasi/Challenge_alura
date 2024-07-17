function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) + 3);
    }

    document.getElementById('outputText').value = outputText;
}

function decryptText() {
    let inputText = document.getElementById('outputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) - 3);
    }

    document.getElementById('inputText').value = outputText;
}
