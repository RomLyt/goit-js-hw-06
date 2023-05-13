const inputText = document.querySelector('input');

inputText.addEventListener("blur", event => {
    let length = inputText.value.length;
    console.log(length);
    if (length === 6) inputText.style.borderColor = "#4caf50";
    else inputText.style.borderColor = "#f44336";
});

