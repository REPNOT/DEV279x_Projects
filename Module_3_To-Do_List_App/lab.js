var element1 = document.getElementById("div2");
var event1 = document.getElementsByTagName("body");
var event2 = document.getElementById("button1");
var event3 = document.getElementById("button1");
var newToDo = console.log(document.getElementById("input1").getAttribute("value"));

event1.onload = addTDFunc1;
event2.onmousedown = addTDFunc2;
event3.onmouseup = addTDFunc2;
function addTDFunc1(){
    let list1 = []
    console.log(list1)
};

function addTDFunc2(){
    console.list1.push(newToDo)
};

function addTDFunc2(){
    element1.innerHTML = console.list1[0]
};
