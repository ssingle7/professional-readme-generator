// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        message: "What is your Github username?",
        name: "name",
    },
    
    {
        type: "input", 
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("The function has run");
    inquirer.prompt(questions).then((response) => {
        console.log(response);
    });
}

// Function call to initialize app
init();
