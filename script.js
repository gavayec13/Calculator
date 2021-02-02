const input = document.getElementById('input');

const insert = num => input.value += num;

document.addEventListener('keydown', Event => {
    if(Event.key.match(/[0-9\/*\-+\.]/)) {
        
        input.value += Event.key;
        err();
    } else if(Event.key.match(/Backspace/)) {
        back();
    } else if(Event.key === 'Enter') {
        input.value = eval(input.value);
    }
});

function err() {
    let arr = ['+', '-', '/', '*'];
    arr.map(i => input.value.endsWith(i) ? console.log('plus') : console.log('no'))
    
}

const clean = () => input.value = '';

const back = () => input.value = input.value.substring(0, input.value.length-1);

const equal = () => input.value ? input.value = eval(input.value) : null;