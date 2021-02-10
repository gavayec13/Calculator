const digitBtns = document.querySelectorAll('.digit');
const actionBtns = document.querySelectorAll('.action');

digitBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        calcInput.value += e.target.innerHTML;
    })
})

actionBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(!calcInput.value[calcInput.value.length-1].match(/[/*\-+\.]/)) {
            calcInput.value += e.target.innerHTML;
        }
    })
})

document.addEventListener('keydown', e => {
    if(calcInput.value === '' && (e.key.match(/[0-9\.]/))) {
        calcInput.value = e.key;
    } else if(e.key === 'Backspace') {
        calcInput.value = calcInput.value.substring(0, calcInput.value.length-1);
    } else if(e.key === 'Enter') {
        calcInput.value = eval(calcInput.value);
    } else if(calcInput.value[calcInput.value.length-1].match(/[/*\-+\.]/) && (e.key.match(/[/*\-+\.]/))) {
        null;
    } else if(e.key.match(/[0-9\/*\-+\.]/)) {
        calcInput.value += e.key;
    }
})

cleanBtn.addEventListener('click', e => {
    calcInput.value = '';
})

backBtn.onclick = () => {
    calcInput.value = calcInput.value.substring(0, calcInput.value.length-1);
}

equalBtn.addEventListener('click', e => {
    calcInput.value = eval(calcInput.value);
})


if(!localStorage.theme) localStorage.theme = 'light'
document.body.className = localStorage.theme
darkModeBtn.onclick = () => {
    
    document.body.classList.toggle('dark');
    console.log(document.querySelectorAll('equalBtn').classList);
    document.getElementsByClassName('digit').style.backgroundColor
    darkModeBtn.innerText = document.body.classList.contains('dark') ? 'LIGHT' : 'DARK';
    localStorage.theme = document.body.className || 'light';
}