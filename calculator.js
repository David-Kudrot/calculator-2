// selects all buttons

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');


// getting all number value
numberButtons.forEach(myFunction);

function myFunction (e) {
    e.addEventListener("click", 
          () => {
                let getNumber = e.innerText;
                //console.log(getText);
                showData(getNumber);
          })           
};


// getting allClear button
document.getElementById("allClear").addEventListener('click', () => {
    //console.log("you clicked all clear button");

});

// getting all operator button value
operationButtons.forEach((e) => {
    let test = e.addEventListener('click', function () { 
        let getOperator = e.innerText;
        // console.log(getNumber);
         showData(getOperator);
     });
});


// getting equal button 
document.getElementById('equalButton').addEventListener('click', () => {
    //console.log("You clicked equal sign");
});

// getting delete button
document.getElementById('deleteButton').addEventListener('click', () => {
    //console.log("You clicked delete sign");
});


// function for showing data 
function showData(data) {
    document.getElementById('current-operand').innerHTML = data;
};


