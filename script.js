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
    } else if(e.key === 'Enter' && calcInput.value) {
        calcInput.value ? calcInput.value = eval(calcInput.value): null;
    } else if(calcInput.value[calcInput.value.length-1].match(/[/*\-+\.]/) && (e.key.match(/[/*\-+\.]/))) {
        null;
    } else if (calcInput.value[calcInput.value.length-1].match(/[/*\-+\.]/) && e.key === 'Enter') {
        calcInput.value = calcInput.value.substring(0, calcInput.value.length-1);
        //calcInput.value = eval(calcInput.value);
    } else if(e.key.match(/[0-9\/*\-+\.]/)) {
        calcInput.value += e.key;
    }
})

cleanBtn.onclick = () => {
    calcInput.value = '';
}

backBtn.onclick = () => {
    calcInput.value = calcInput.value.substring(0, calcInput.value.length-1);
}

equalBtn.onclick = () => {
    calcInput.value ? calcInput.value = eval(calcInput.value): null;
}


// if(!localStorage.theme) localStorage.theme = 'light';
// document.body.className = localStorage.theme;

darkModeBtn.onclick = () => {
    const bodyClass = document.body.classList;
    const digit = document.querySelectorAll('.digit');
    const action = document.querySelectorAll('.action');
    const equal = document.querySelector('.equal');
    const back = document.querySelector('.back');

    bodyClass.toggle('dark');

    if(!bodyClass.contains('dark')) {
        for(el of digit) el.classList.remove('darkDigitBtn');
        for(el of action) el.classList.remove('darkAction');
        darkModeBtn.classList.remove('darkDigitBtn');
        equal.classList.remove('darkBackEqual');
        back.classList.remove('darkBackEqual');
        calcInput.classList.remove('darkInput');
        darkModeBtn.innerText = 'DARK';
    } else {
        for(el of digit) el.classList.add('darkDigitBtn');
        for(el of action) el.classList.add('darkAction');
        darkModeBtn.classList.add('darkDigitBtn');
        equal.classList.add('darkBackEqual');
        back.classList.add('darkBackEqual');
        calcInput.classList.add('darkInput');
        darkModeBtn.innerText = 'LIGHT';
    }
    
    //localStorage.theme = document.body.className || 'light';
}