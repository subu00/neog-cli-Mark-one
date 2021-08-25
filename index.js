var chalk = require("chalk");
var readlinesync = require("readline-sync")
var score = 0;
var highestscore = 9;
console.log("------------------")
var username = readlinesync.question(chalk.red("what is your name? "))
console.log(``)
console.log(chalk.blue("welcome ") + username + chalk.blue(" To the computer world! "));
console.log(``)

function play(questions,answers)
{
  var useranswer = readlinesync.question(questions);
  if(useranswer === answers ){
    console.log("Right Answer 🥳")
    score= score + 1
  }
  else {
    console.log("Wrong Answer 😢")
  }
}

var questions =[ {
  question : chalk.red("Do you know my name? "),
  answer: "Nishant"
}, {
  question : chalk.green("where does he live? "),
  answer: "Earth"
},{
  question : chalk.yellow("does he have a dog? say: yes or no?" ),
  answer : "yes"
},
{ question : chalk.blackBright("what is the name of the dog? "), answer: "sippy"
  },{
  question : chalk.green("is he a civil or computer engineer? " ),
  answer : "computer"
}
]

for (var i=0; i<questions.length;i++){
 currentquestion = questions[i];
 play(currentquestion.question,currentquestion.answer);
}

if(score > highestscore){
  console.log(chalk.bgYellow.underline.bold("you got the highest score😲: ") +score)
  console.log(chalk.redBright("congratulation🙌🥳🥳"))
}
else{
  console.log(chalk.underline.redBright("your score is: "),+score)
  console.log(chalk.red.bold(" you didn't got highest score😎! \n better luck next time😉👍!"))
}
