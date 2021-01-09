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
const generateReadMe = ({name}) => {
    const markdownStringToWriteToFile = 

``
;
return markdownStringToWriteToFile;
}




// TODO: Create a function to initialize app
function init() {
    console.log("The function has run");
    inquirer.prompt(questions).then((response) => {
        console.log(response);

        const dynamicString = generateReadMe(response);
   

    // TODO: Create a function to write README file
fs.writeFile("generated.html", dynamicString, (err) => {
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
