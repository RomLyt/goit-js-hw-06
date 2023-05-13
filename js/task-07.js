const textSize = document.querySelector('#font-size-control');
const textArea = document.querySelector('#text')

textSize.addEventListener('input', event => {
    console.log(textSize.value)
    textArea.style.fontSize = `${textSize.value}px`;
});
