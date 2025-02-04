

const taskList = ["Task 1", "25/01/25", "10:00", "Feed tortoise"];

//--This prints DEMO output on the page in Widget1 box

var findwidget1 = document.getElementsbyId("");


document.getElementById("demo").innerHTML = "Hello world";


//Thid udrd the button clicktest (test click listener, to print some elements on page)
clicktest.addEventListener("click", buttonClick);

function buttonClick() {
  document.getElementById("demo").innerHTML = "Pigs might fly";
  document.getElementById("title").innerHTML = taskList[0];
   document.getElementById("date").innerHTML = taskList[1];
   document.getElementById("time").innerHTML = taskList[2];
   document.getElementById("details").innerHTML = taskList[3];
}

