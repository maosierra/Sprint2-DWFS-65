let clickBox = document.getElementById('clickBox');
clickBox.addEventListener('click', alDarClick);

function alDarClick() {
    clickBox.classList.toggle('color');
}

let dbclickBox = document.getElementById('dbclickBox');
dbclickBox.addEventListener('dblclick', () => {
    dbclickBox.classList.toggle('color');
});

let clickBoxOn = document.getElementById('clickBoxOn');
clickBoxOn.onclick = () => {
    clickBoxOn.classList.toggle('color');
}

let dbclickBoxOn = document.getElementById('dbclickBoxOn');
dbclickBoxOn.ondblclick = () => {
    dbclickBoxOn.classList.toggle('color');
}

let createBoxBtn = document.getElementById('createBoxBtn');
let boxCtn = document.getElementById('boxCtn');

let createBox = () => {
    let box = document.createElement('div');
    box.classList.add('square');
    boxCtn.appendChild(box);
}

createBoxBtn.addEventListener('click', createBox);

let stopBoxesBtn = document.getElementById('stopBoxesBtn');
stopBoxesBtn.addEventListener('click', () => {
    createBoxBtn.removeEventListener('click', createBox);
});

let subitemList = document.getElementById('subitemList');
subitemList.addEventListener('click', (event) => {
    if (event.target.children[0].style.display === 'none') {
        event.target.children[0].style.display = 'block';
    } else {
        event.target.children[0].style.display = 'none';
    }
});

let bigBoxWith = document.getElementById('bigBoxWith');
let squareWith = document.getElementById('squareWith');
let parWith = document.getElementById('parWith');

bigBoxWith.addEventListener('click', () => {
    alert('hiciste clic en bigbox');
});

squareWith.addEventListener('click', () => {
    alert('hiciste clic en square');
    event.stopPropagation();
});

parWith.addEventListener('click', () => {
    alert('hiciste clic en parwith');
    event.stopPropagation();
});

let items = document.getElementsByClassName('item');
for (let index = 0; index < items.length; index++) {
    const item = items[index];
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "#ff4f4f";
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "#ffffff";
    });
}

let mouseBox = document.getElementById('mouseBox');
mouseBox.addEventListener('mousedown', () => {
    mouseBox.textContent = 'Mouse down';
});

mouseBox.addEventListener('mouseup', () => {
    mouseBox.textContent = 'Mouse up';
});

let textCutCopy = document.getElementById('textCutCopy');
textCutCopy.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'Copiaste el texto');
    event.preventDefault();
});

textCutCopy.addEventListener('cut', (event) => {
    event.preventDefault();
});

let inputPaste = document.getElementById('inputPaste');
inputPaste.addEventListener('paste', (event) => {
    event.preventDefault();
});

let inputFocus = document.getElementById('inputFocus');

inputFocus.addEventListener('focus', () => {
    console.log('hizo foco en el input');
});


inputFocus.addEventListener('blur', () => {
    console.log('hizo blur en el input');
});

let key = document.getElementById('key');
key.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        alert('presiono enter');
    } else if (event.key === 'Backspace'){
        alert('presiono backspace');
    }
});

let key2 = document.getElementById('key2');
key2.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        alert('presiono enter');
    } else if (event.key === 'Backspace'){
        alert('presiono backspace');
        event.preventDefault();
    }
});