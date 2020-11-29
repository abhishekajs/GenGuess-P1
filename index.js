var readlineSync = require('readline-sync')

var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);
console.log("Let's guess some questions!!!");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score++;
  } else{
    console.log("wrong!");
  }
  console.log("Current Score is : " + score);
  console.log("------------------");
}


var questions = [{
  question : "What is the capital of Uttar Pradesh? " ,
  answer : "Lucknow" ,
},{
  question : "What is the capital of Maharashtra?  " ,
  answer : "Mumbai" ,
},{
  question : "What is capital of Karnataka? " ,
  answer : "Bangalore" ,
},{
  question : "What is capital of Rajasthan? " ,
  answer : "Jaipur",
},{
  question : "What is capital of Assam? " ,
  answer : "Dispur",
},{
  question : "What is capital of Kerala? ",
  answer : "Thiruvananthapuram" ,
},{
  question : "What is capital of Punjab? ",
  answer : "Chandigarh",
},{
  question : "What is capital of Bihar? ",
  answer : "Patna",
},{
  question : "What is capital of Orissa? ",
  answer : "Bhubaneswar",
}, {
  question : "What is capital of West Bengal? ",
  answer : "Kolkata",
}];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  if(score == 5){
    console.log("You reached level 2!");
  }
}

console.log("You scored : " + score);
if(score == 10){
  console.log("You reached level 3!");
}
if(score < 5){
  console.log("You were at level 1! Try hard and score well!");
}