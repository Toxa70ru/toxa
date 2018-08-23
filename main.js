const input = document.getElementById('num-input');
const numButtons = document.getElementsByClassName('num-button');
let enterNumber;
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    };
}

enterNumber = (n) => {

    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }

};
const backButton = document.getElementById('back-Button');
backButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    }
    else {
        input.value = input.value.slice(0, 0);
    }
};
const backspaceButton = document.getElementById('backspace-Button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    }
    else {
        input.value = input.value.slice(0, -1);
    }
};
const dotButton = document.getElementById('dot-Button');
dotButton.onclick = () => {
    const n = input.value.length;
    for (let i = 0; i < n; i += 1) {
        if (input.value[i] === ',') {
            return;
        }
    }
    input.value += ','
};
let num = null;
let op = null;
const pulseButton = document.getElementById('pulse-Button');
pulseButton.onclick = () => {
const n=enterNumber;
    if (num == null) {
        op = '+';
        console.log('+')
    }else{
        if(op==null){
            num=input.value;
            input.value=n;
        }
    }
};


// DOM - Document Object Model
// BOM - Browser Object Model
