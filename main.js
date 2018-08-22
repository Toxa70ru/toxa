const input = document.getElementById('num-input');
const numButtons = document.getElementsByClassName('num-button')
let enterNumber;
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    };
}

enterNumber =(n) =>{
    if (input.value==='0'){
        input.value=n;
    }else{
        input.value=input.value + n;
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



// DOM - Document Object Model
// BOM - Browser Object Model
