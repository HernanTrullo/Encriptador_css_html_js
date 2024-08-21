function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Simple base64 encoding
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('inputText').value = "";
}

function decryptText() {
    const encryptedText = document.getElementById('outputText').value;
    try {
        const decryptedText = atob(encryptedText); // Simple base64 decoding
        document.getElementById('outputText').value = decryptedText;
        document.getElementById('inputText').value = "";
    } catch (e) {
        alert('Texto encriptado no válido');
    }
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
