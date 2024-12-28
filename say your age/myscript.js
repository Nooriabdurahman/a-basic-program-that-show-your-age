const button = document.getElementById('button');
const input = document.getElementById('input');
const result = document.getElementById('result');

button.onclick = ()=>{
    let natejah;
    let date = new Date();
    date = date.getFullYear();
    inputvalue = input.value;
    inputvalue = Number(inputvalue);
    natejah = inputvalue - date;
    natejah = Math.abs(natejah);
    if(inputvalue == ""){
        result.textContent = `please enter any thing`
        result.style.color = "tomato"
    }

    else if (inputvalue < 1900 || inputvalue > date) {
        result.textContent = `Please enter a year between 1900 and ${date}`;
        result.style.color = "tomato"
    } 

    else if(isNaN(inputvalue)){
        result.textContent = 'enter a vailed number not alfhabit'
        result.style.color = "tomato"
    }

    else {
        natejah = date - inputvalue; 
        natejah = Math.abs(natejah);
        result.textContent = `You are ${natejah} years old.`;
        result.style.color = "blue"
    }
}