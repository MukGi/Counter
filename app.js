const decBtn = document.getElementById("decBtn");
const rstBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("counterLabel");

let counter =0;

incBtn.onclick = function(){
    counter += 1;
    countLabel.textContent = counter;
}

decBtn.onclick = function(){
    counter -= 1;
    countLabel.textContent = counter;
}

rstBtn.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}
