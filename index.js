// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");
const util = require("util");


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
    
    {
        type: "input", 
        message: "What is your project's name?",
        name: "project",
    },
    
    {
        type: "input", 
        message: "Please write a short description of your project",
        name: "description",
    },
    
    {
        type: "input", 
        message: "What kind of license should your project have?",
        name: "license",
    },

    {
        type: "input", 
        message: "What command should be run to install dependencies?",
        name: "install",
    },
    
    {
        type: "input", 
        message: "What command should be run to run tests?",
        name: "test",
    },

    {
        type: "input", 
        message: "What does the user need to know about using the repo?",
        name: "repo",
    },

    {
        type: "input", 
        message: "What does the user need to know about contributing to the repo?",
        name: "contributors",
    },
];

//create a function to input data into the generated file by destructuring objects and creating a return
function generateMarkdown(data) {
    {
        return `# ${data}
        https://github.com/${data}/${data}
        #Description
        ${data}
        #Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
      #Installation
      * The following necessary dependencies must be installed to run the application
      #Usage
      *In order to use this app, ${data}
      #License
      This project is licensed under the ${data} license. 
      ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
      #Contributing
      Contributors: ${data.contributors}
      #Tests 
      The following is needed to run the test: ${data.tests}
      #Questions
      If you have any questions about the repo, open an issue or contact ${data.user}
      
        
      `;
      }
}




// TODO: Create a function to initialize app
function init() {
    console.log("The function has run");
    inquirer.prompt(questions).then((response) => {
        console.log(response);

        const dynamicString = generateMarkdown(response);
   

    // TODO: Create a function to write README file
fs.writeFile("generatedMarkdown.md", dynamicString, (err) => {
    if(err){
        console.error(err);
    }else {
        console.log("Your README has been generated!");
    }
});

});
}
// Function call to initialize app
init();
