// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won =  false;
var guesses = [];

// game control loop - iterates for each try
for (var i = 1; i <= limit; i++){
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviousGuess(guess));
    
    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: add number to guesses array
    else{
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses[i] + "\nTries remaining: " + (limit - i));
    }
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. Game over. The correct number was: " + number);
}

function isPreviousGuess(){
    for(var i = 1; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}