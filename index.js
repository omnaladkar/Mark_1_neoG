

var readlineSync = require('readline-sync')

var userName = readlineSync.question('What is your name');


var score = 0;



//fisrtd letter start with lowercase and 2nd word with uppercase

var welcomeMessage = "I am hAppy to see you here" +userName;

console.log(welcomeMessage);


var  questions = [{
    question: "do you like mess food?yes/no",
    ans: "no"
},
{
    question: "what is your country's name?",
    ans: "india"
},
{
    question: "where do you live?",
    ans: "nanded"
},
{
    question: "what is your crush name?",
    ans: "money"
},
{
    question: "which is your favourite profession?",
    ans: "politician"
}


];


const game = (question,ans) => {


    var inputAns = readlineSync.question(question);

    if(inputAns.toLowerCase() == ans){
        score = score+1;
        
    }
    else{
          
            score = score-1;
        
          
    }
}

for(var  i=0;i<5;i=i+1){
   var currentQuestion = questions[i];
   game(currentQuestion.question,currentQuestion.ans);
}

console.log(score);




