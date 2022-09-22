// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = ["What is the Title ", "Give a Description", "Table of Contents", "Are there any installation instructions", "what is the Usage of this app", "What License does you app have", "are there any contributing guidelines ", "how do you test your file", "what is your git Hub username","What is you email"];


inquirer
.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'table of Contents',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'usageInfo',
    },
    {
        type: 'checkbox',
        message: questions[5],
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv3'],
    },
    {
        type: 'input',
        message: questions[6],
        name: 'contributing',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'tests',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'gitHubAccount',
    },
    {
        type: 'input',
        message: questions[9],
        name: 'email',
    },
])
.then((data) => {  

        fs.writeFile("README.md", 
        `# ${data.title}\n
        /////////
        ${data.license}\n
        Decsription:${data.description}\n
        Installation:${data.installation}\n
        Usage:${data.usage}\n
        Contributing:${data.contributing}\n
        Test Instuctions:${data.tests}\n
        Questions?:================\n
        https://github.com/${data.gitHubAccount}\n
        Email: ${data.email}\n`, (err) =>
        err ? console.log(err) : console.log('Success! your README file has been created.'))
});
    
// .then((data) =>
// fs.appendFile("README.md", `Decsription:${data.description}`, (err) =>
// err ? console.log(err) : console.log('Success!')))

// fs.writeFile("README.md", JSON.stringify(data, null, '\t'), (err) =>
// err ? console.log(err) : console.log('Success!')))



// // TODO: Create a function to write README file
// function writeToFile(filename, data) {

// }



// // TODO: Create a function to initialize app
// function init() {


// }

// // Function call to initialize app
// init();