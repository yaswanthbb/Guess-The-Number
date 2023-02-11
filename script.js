let input = document.getElementById("userInput");
let resultText = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
function result(){
    let inputNumber = parseInt(input.value);
    if ( inputNumber > randomNumber){
        resultText.textContent = "Number is larger, Try again";
        resultText.style.color="red";

    }
    else if (inputNumber < randomNumber){
        resultText.textContent =  "Number is smaller,Try again";
        resultText.style.color="red";
    }
    else if(inputNumber == randomNumber){
        resultText.textContent="The Number is "+ randomNumber+" Congratulations You Won";
        resultText.style.color="#0C7C59";
    }
    else
    resultText.textContent = "Wrong Input Try Again";
}
