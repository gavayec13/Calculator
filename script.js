const input = document.getElementById('input');

const insert = num => {
    (input.value.includes(num) && num.match(/[/*\-+\.]/)) ? null : input.value += num;
}

document.addEventListener('keydown', e => {
    (input.value.includes(e.key) && e.key.match(/[/*\-+\.]/)) ? null : (
        (e.key.match(/[0-9\/*\-+\.]/)) ? input.value += e.key : (
            (e.key.match(/Backspace/)) ? back() : (
                (e.key === 'Enter') ? input.value = eval(input.value) : null)
        )
    );
})

const clean = () => input.value = '';

const back = () => input.value = input.value.substring(0, input.value.length-1);

const equal = () => input.value ? input.value = eval(input.value) : null;

