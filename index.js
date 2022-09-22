// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ["What is the Title ", "Give a Description", "Table of Contents", "Are there any installation instructions", "what is the Usage of this app", "What License does you app have", "are there any contributing guidelines ", "Tests", "Questions?"];


inquirer
.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'Title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'Description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'Installation',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'UsageInfo',
    },
    {
        type: 'checkbox',
        message: questions[5],
        name: 'License',
        choices: ['MIT', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'input',
        message: questions[6],
        name: 'Contributing',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'Tests',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'Questions',
    },
])
.then((data) =>
fs.writeFile("README.md", JSON.stringify(data, null, '\t'), (err) =>
err ? console.log(err) : console.log('Success!')))

  


// // TODO: Create a function to write README file
// function writeToFile(filename, data) {

// }


// // TODO: Create a function to initialize app
// function init() {


// }

// // Function call to initialize app
// init();
