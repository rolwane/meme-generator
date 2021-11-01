const input = document.querySelector('#text-input');
const file = document.querySelector('#meme-insert');
const buttons = document.querySelector('#container-buttons');
const memeContainer = document.querySelector('#meme-image-container');

function insertText() {
  document.querySelector('#meme-text').innerText = input.value;
}

function insetImage() {
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.src = URL.createObjectURL(file.files[0]);
  memeContainer.appendChild(image);
}

function changeBorder(event) {
  if (event.target.id !== 'container-buttons') {
    switch (event.target.id) {
    case 'fire':
      memeContainer.style.border = '3px dashed red';
      break;

    case 'water':
      memeContainer.style.border = '5px double blue';
      break;

    case 'earth':
      memeContainer.style.border = '6px groove green';
      break;

    default:
      break;
    }
  }
}

input.addEventListener('keyup', insertText);
file.addEventListener('change', insetImage);
buttons.addEventListener('click', changeBorder);
