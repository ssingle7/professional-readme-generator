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
const generateHtml = ({name}) => {
    const htmlStringToWriteToFile = 

`<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>

<body>
    <h1>${name}</h1>
    <p>Savannah, Ga</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, earum, nobis iure sed atque reprehenderit qui
        praesentium, optio consectetur excepturi repellendus hic cupiditate similique fuga necessitatibus nemo vel!
        Optio, ea.</p>
        <a href="http://www.github.com">Github</a>
        <a href="http://www.linkedin.com">LinkedIn</a>
    <script src="" async defer></script>
</body>

</html>`
;
return htmlStringToWriteToFile;
}




// TODO: Create a function to initialize app
function init() {
    console.log("The function has run");
    inquirer.prompt(questions).then((response) => {
        console.log(response);

        const dynamicString = generateHtml(response);
   

    // TODO: Create a function to write README file
fs.writeFile("generated.html", htmlStringToWriteToFile, (err) => {
    if(err){
        console.error(err);
    }else {
        console.log("Successfully generated HTML file");
    }
});

});
}
// Function call to initialize app
init();
