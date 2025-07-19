
const display = document.getElementById('display');

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button=>{

    button.addEventListener('click',()=>{
        const value = button.textContent;

        if(value === 'C'){
            display.textContent = "0";
        }else if (value === '='){
            display.textContent = eval(display.textContent);
            return;
        }else{
            display.textContent = display.textContent === '0' ? value : display.textContent + value;
        }
    });
});