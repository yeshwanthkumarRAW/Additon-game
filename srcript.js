let firstNumber = document.getElementById('first-number');
let secondNumber = document.getElementById('second-number');
let userInput = document.getElementById('user-input');
let gameResult = document.getElementById('game-result');

 let successMessage = "Congratulations you got it right"
 let tryAgainMessage = "Please try again!"   


function restartGame(){
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumber.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);
    gameResult.textContent = "";
    userInput.value = "";

}
 

restartGame();


function checkResult(){

    let firstRandomInteger = parseInt(firstNumber.textContent);
    let secondRandomInteger = parseInt(secondNumber.textContent);
    let EnteredUserInput = parseInt(userInput.value);

    let sum = firstRandomInteger + secondRandomInteger;

    if (EnteredUserInput === sum){
        gameResult.textContent = successMessage;
        gameResult.style.backgroundColor = "#028a0f"
    }
    else{
        gameResult.textContent = tryAgainMessage;
        gameResult.style.backgroundColor = "#1e217c";
    }
    

}

