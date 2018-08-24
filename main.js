const input = document.getElementById('num-input');
const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    };
}
const pulseButton = document.getElementsByClassName("operation-button");
[].forEach.call(pulseButton, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});

const backButton = document.getElementById('back-Button');
backButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    }
    else {
        input.value = input.value.slice(0, 0);
        num = 0;
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
let num = 0;
let p = false;
let lop=null;
const enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            num=parseFloat(input.value);
            input.value = n;
            p = false;
        } else {
            input.value = input.value + n;
        }
    }

};
const dispatchOperation = (operation) => {

    if (lop){
        if(!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }
   p = true;
    lop = operation;
};
const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case 'X':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;


    }
};


// DOM - Document Object Model
// BOM - Browser Object Model
