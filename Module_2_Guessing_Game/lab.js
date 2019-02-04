// program data:
var number = 4;
var guess;


// prompt user for their guess
guess = prompt("Guess a number");

// if correct: let the user know they won
if(guess == number){
    document.write("Correct! You won.")
}

// if incorrect: let the user know
else{
    alert("Incorrect");
}