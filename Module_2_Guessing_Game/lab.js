// program data:
var number = 4;
var guess;
var limit = 5;
var won = false;

for(i = 1;i <= limit; i++){
    // prompt user for their guess
    guess = prompt("Guess a number");

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }

    // if incorrect: let the user know
    else{
        alert("Incorrect. Tries remaining: " + (limit - i));
    }
};

// if the user ran out of tries, let them know the game is over
if(!(won == false)){
    document.write("Sorry, you ran out of tries. Game over.");
};