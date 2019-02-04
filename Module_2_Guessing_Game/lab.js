// program data:
var randomNum = 10;
var welcomeMessage = ("Welcome to the Guessing Game!" +
                      "You will be given 5 chances to guess" +
                      "the correct number between 1 and 100.");
var congratsMessage1 = " is correct! You won in ";
var congratsMessage2 = " guesses! Congratulations!";
var sorryMessage1 = "Sorry! ";
var sorryMessage2 = " is incorrect. Please try again.";
var sorryMessage3 = " attempts remaining.";
var sorryMessage4 = " is incorrect. 0 attempts remaining. Better luck next time!";
var guessCount = -1;

// prompt user for their guess:
while(guessCount == -1){
    window.alert(welcomeMessage)
    guessCount++
};

for(var userGuess = window.prompt("Enter Guess: "); (guessCount >= 0 && guessCount <= 5); guessCount++){
    while((userGuess >= 0) && (userGuess <= 100)){
        if(guessCount == 1){
            if(userGuess == randomNum){
                document.getElementById("gameOutcome").innerHTML += (userGuess + congratsMessage1 + guessCount + congratsMessage2)
                document.getElementById("guess1").innerHTML += userGuess
                guessCount += 6
            }
            else
            {
                document.alert(sorryMessage1 + userGuess + sorryMessage2 + (5 - guessCount) + sorryMessage3)
                document.getElementById("guess1").innerHTML += userGuess
            };
        }
        else
        {
            if(guessCount == 2){
                if(userGuess == randomNum){
                    document.getElementById("gameOutcome").innerHTML += (userGuess + congratsMessage1 + guessCount + congratsMessage2)
                    document.getElementById("guess2").innerHTML += userGuess
                    guessCount += 6
                }
                else
                {
                    document.alert(sorryMessage1 + userGuess + sorryMessage2 + (5 - guessCount) + sorryMessage3)
                    document.getElementById("guess2").innerHTML += userGuess
                };
            }
            else
            {
                if(guessCount == 3){
                    if(userGuess == randomNum){
                        document.getElementById("gameOutcome").innerHTML += (userGuess + congratsMessage1 + guessCount + congratsMessage2)
                        document.getElementById("guess3").innerHTML += userGuess
                        guessCount += 6
                    }
                    else
                    {
                        document.alert(sorryMessage1 + userGuess + sorryMessage2 + (5 - guessCount) + sorryMessage3)
                        document.getElementById("guess3").innerHTML += userGuess
                    };
                }
                else
                {
                    if(guessCount == 4){
                        if(userGuess == randomNum){
                            document.getElementById("gameOutcome").innerHTML += (userGuess + congratsMessage1 + guessCount + congratsMessage2)
                            document.getElementById("guess4").innerHTML += userGuess
                            guessCount += 6
                        }
                        else
                        {
                            document.alert(sorryMessage1 + userGuess + sorryMessage2 + (5 - guessCount) + sorryMessage3)
                            document.getElementById("guess4").innerHTML += userGuess
                        };
                    }
                    else
                    {
                        if(guessCount == 5){
                            if(userGuess == randomNum){
                                document.getElementById("gameOutcome").innerHTML += (userGuess + congratsMessage1 + guessCount + congratsMessage2)
                                document.getElementById("guess5").innerHTML += userGuess
                                guessCount += 6
                            }
                            else
                            {
                                document.getElementById("gameOutcome").innerHTML += (sorryMessage1 + userGuess + sorryMessage4)
                                document.getElementById("guess5").innerHTML += userGuess
                            };
                        };
                    };
                };
            };
        };
    };
};