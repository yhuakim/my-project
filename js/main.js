
const Up = document.querySelector('#up');
const Down = document.querySelector('#down');
const Pages = document.querySelector('.pages');
const dropDown = document.querySelector('.drop');
const Caret = document.querySelector('.caret');

let showUp = false;

Caret.addEventListener('click', toggleCaret);

function toggleCaret(){
    if(!showUp) {
        Up.classList.toggle('show');
        dropDown.classList.toggle('show');
        Down.classList.togggle('hide');
    }
}

