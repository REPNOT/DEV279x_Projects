var userInput1 = 0;
var list1 = [];
var list2 = [];

while(userInput1 != 2){
    var userInput1 = window.prompt("Add ToDo?\n\n"
                               + "[1] YES\n\n"
                               + "[2] NO")
    if(userInput1 == 1){
        var newToDoText = window.prompt("Enter ToDo:\n")
        var delToDoBut = "Done"
        list1 += newToDoText.toString()
        list2 += delTodDoBut

    }
};


document.getElementById("div3").innerHTML = list1;
document.getElementById("div3").innerHTML = list2;
