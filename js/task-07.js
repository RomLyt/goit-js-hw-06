const textSize = document.querySelector('#font-size-control');
const textArea = document.querySelector('#text')

textSize.addEventListener('input', event => {
    textArea.style.fontSize = `${textSize.value}px`;
});
