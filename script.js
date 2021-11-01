const input = document.querySelector('#text-input');
const file = document.querySelector('#meme-insert');

function insertText() {
  document.querySelector('#meme-text').innerText = input.value;
}

function insetImage() {
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.src = URL.createObjectURL(file.files[0]);
  document.querySelector('#meme-image-container').appendChild(image);
}

input.addEventListener('keyup', insertText);
file.addEventListener('change', insetImage);
