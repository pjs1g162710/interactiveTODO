

//Create some variables

//Add input fields

var title: "input1";
var msg: "input2",;
var deadln: "input3",;


//To figure out task status

var status = document.getElementById("ddlViewBy");
var statusvalue = e.value;
var statustext = e.options[e.selectedIndex].text;


var task: {title + msg + deadln + statustext}  ;

//to get info out of the array,
//taskname
console.log(task,title,String);
console.log(task.deadln, dateString);
console.log(task.msg, String);




VarDate = new Date(dateString);

//to add a new task to the array
task.push("input1", "input2","input3" );

// to remove last item from the array
task.pop();

//to obtain the number of tasks in the array
var length = task.length;


//for loops in Java
for (var i=0; i < 10; i++) {
    console log(i);
}
//INTERPRETATION of SYNTAX
// create a new function called fred
function fred() {
    //this starts the for loop, and creates i as a variable containing 2
    for (let i = 2);
    //this iterates until i is less than or equal to 100
    i <=100;
    //this is the increment operator, it adds +1 to the operand, 
    //and returns the value before or after the +1, depending on where
    //it is placed.
    i++)
 }

 //OPPOSITE FOR LOOP
 for (let i=10; i >0 i--) {
    console.log(i +"green bottles sitting on a wall")
 }
//this script creates variable i with value 10, then
//decrease the value of i by one each loop and prints
//the countdown until 1 is reached.

//OBJECT VARIABLES
var student = {
    name: "fred the mongoose",
    grade: trouble,
    course: escapism,
    cohort: Jan35
};

//to access properties in an object variable
console.log(student.name); //will return "fred the mongoose"
console.log(grade); //will return 'trouble'

//OBJECT METHODS - it's a function
var student = {
    name: "fred the mongoose",
    grade: trouble,
    course: escapism,
    cohort: Jan35
    submitHomework: function() {
        return "here's my homework";
    }
}
// this method creates the variable 'student'
//variable has properties 'name', 'grade' 'course' etc
//it then stores the input for submitHomework into variable 'student'

//ARRAYS AND LISTS USE SQUARE BRACKETS
const students = ["John", "Jane", "Sarah", "Alice", "Bob"];
//To access students in the array, use:
console.log(students[0]); //will return John.
//you can add this to a statement, e.g
console.log(students[1]) + " is the second student in the array."

//to create an array
var studentGrades = [90, 80, 44, 84, 50, 75];

//To add a new grade, use PUSH
studentGrades.push(100);

//to delete the last item of the array
studentGrades.pop()
//I need to test this, but presumably to delete a specific part of the array
studentGrades.pop([0])


//on the active page, we need to

//(1) Query if a task is active (boolean 'status')
//(2) Change task status field from 'active' to 'complete' when 'Mark as complete' button clicked
//(3) Create a new box when the 'Add task' button on the home page is clicked
//(4) Change colour of box when task status is 'complete'. 

