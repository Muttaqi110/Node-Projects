//Importing Inquirer and chalk
import inquirer from "inquirer"
import chalk from "chalk"


//Random Number
let randomNumber = Math.floor(Math.random() * 100)

//Number of attemprt
let attempts:number = 0

//Maximum Tries
let max_tries:number=10

//Telling That how much you have attempts
console.log(chalk.magentaBright.bgCyanBright("You have 10 attempts"))


//Creating function for game
function game (){

//attempts are counted
let ab =attempts ++

//Using inquirer to prompt Guess the number
inquirer
.prompt([
{
    type:"input",
    name:"Guess",
    message:chalk.blue("Guess the number between 1 - 100"),

}
])


.then((answers) => {

//Making an nested if else if statement to console the message that you have reached the limit or not
if(ab != 10){


//console the message that the number you guessed is less than the number
if (answers.Guess<randomNumber && answers.Guess<=100 || answers.Guess<=0){
    console.log(chalk.yellow("The number is greater than your guess"))
    game()} 

//console the message that the number you guessed is greater than the number

else if (answers.Guess>randomNumber && answers.Guess <101){
    console.log(chalk.gray("The number is less than your guess"))
    game()
}


//console the message that the number you typed is more or less than the limit of 1 - 100
else if (answers.Guess> 100 || answers.Guess<=0){
    console.log(chalk.red("Choose a number between 1 - 100"))
    game()
}

// Congrats you that you won the game in ___ tries
else if (answers.Guess == randomNumber){
    console.log(chalk.greenBright("Congratulation! you won the game in ",attempts,"tries"))
}

// Console a message when you type somthing rather than digit
else {
    console.log(chalk.redBright("Type a number!"))
    game()
}}

//Message that you lost the game
else if(ab = 10 ){
    console.log(chalk.redBright("You lost the game because you took more tries"))
}

})
.catch((error) => {
if (error.isTtyError) {
}
else {
}
})}

game()