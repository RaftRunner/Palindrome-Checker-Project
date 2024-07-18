document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const resultElement = document.getElementById("result");
    const originalText = inputText;
    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultElement.textContent = `${originalText} is a palindrome`;
    } else {
        resultElement.textContent = `${originalText} is not a palindrome`;
    }
});
