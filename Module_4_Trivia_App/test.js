let testList1 = [];
var newQuestFull = $("#enterQuestion");
var newQuestChoice1 = $("#enterAnswer1");
var newQuestChoice2 = $("#enterAnswer2");
var newQuestChoice3 = $("#enterAnswer3");
var newQuestChoice4 = $("#enterAnswer4");
var submitQuestion = $("#submit2");
var dropDownOption1 = $("#option1");
var dropDownOption2 = $("#option2");
var dropDownOption3 = $("#option3");
var dropDownOption4 = $("#option4");
var newQuestForm = $("#newQuestForm");

newQuestFull.on("click", function(){
    newQuestFull.attr("value", "")
});

newQuestChoice1.on("click", function(){
    newQuestChoice1.attr("value", "")
});

newQuestChoice2.on("click", function(){
    newQuestChoice2.attr("value", "")
});

newQuestChoice3.on("click", function(){
    newQuestChoice3.attr("value", "")
});

newQuestChoice4.on("click", function(){
    newQuestChoice4.attr("value", "")
});

function test1(){
    var dropDownAnswer = $("select");
    testList1.push(dropDownAnswer);
    localStorage.setItem('answer', testList1[0]);
    alert(localStorage.getItem('answer'));
    alert(testList1[0])
};
