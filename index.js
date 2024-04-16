#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5);
const answers = await inquirer.prompt([{
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 5",
    }]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("You have guess it right");
}
else {
    console.log("sorry you have guessed wrong number");
}
