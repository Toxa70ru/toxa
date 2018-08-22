const input = document.getElementById('num-input');
const num1 = document.getElementById('num1');
num1.onclick = () => {
    enterNumber(1);


};

const num2 = document.getElementById('num2');
num2.onclick = () => {
    enterNumber(2);
};
const num3 = document.getElementById('num3');
num3.onclick = () => {
    enterNumber(3);
};
const num4 = document.getElementById('num4');
num4.onclick = () => {
    enterNumber(4);
};
const num5 = document.getElementById('num5');
num5.onclick = () => {
    enterNumber(5);
};
const num6 = document.getElementById('num6');
num6.onclick = () => {
    enterNumber(6);
};
const num7 = document.getElementById('num7');
num7.onclick = () => {
    enterNumber(7);
};
const num8 = document.getElementById('num8');
num8.onclick = () => {
    enterNumber(8);
};
const num9 = document.getElementById('num9');
num9.onclick = () => {
    enterNumber(9);
};
const num0 = document.getElementById('num0');
num0.onclick = () => {
    enterNumber(0);
};
enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};
const backspaceButton = document.getElementById('backspace-Button');
backspaceButton.onclick = () => {
    if (input.value.length === 1)
    {input.value = '0';}
     else {
        input.value = input.value.slice(0,-1);
    }
};
const texButton = document.getElementById('tex-Button');
texButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = 'pulse'}
        else {input.value=input.value.}
};

// DOM - Document Object Model
// BOM - Browser Object Model
