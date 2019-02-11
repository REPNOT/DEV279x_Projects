/*
var questionOrder = ["Question Number 1", "Question Number 2", "Question Number 3", "Question Number 4"];
var questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
var answerOrder = ["Answer Number 1", "Answer Number 2", "Answer Number 3", "Answer Number 4"];
var answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
var counter1 = 0;


while(counter1 < questionOrder.length){
   localStorage.setItem(questionOrder[counter1], questions[counter1]);
   localStorage.setItem(answerOrder[counter1], answers[counter1]);
   counter1++;
}

var userInput1 = window.prompt("[1] Start [2] Quit");
var counter2 = 0;

if(userInput1 == 1){
    while(counter2 < questionOrder.length){
        alert("Question: " + localStorage.getItem(questionOrder[counter2])
              + "\n\nAnswer: " + localStorage.getItem(answerOrder[counter2]));
        counter2++;
    }
}
*/
