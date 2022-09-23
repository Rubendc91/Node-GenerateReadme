// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the Title ",
            name: 'title',
        },
        {
            type: 'input',
            message: "Give a Description",
            name: 'description',
        },
        {
            type: 'input',
            message: "Are there any installation instructions",
            name: 'installation',
        },
        {
            type: 'input',
            message: "what is the Usage of this app",
            name: 'usageInfo',
        },
        {
            type: 'checkbox',
            message: "What License does you app have",
            name: 'license',
            choices: ['MIT', 'Apache', 'GPLv3'],
        },
        {
            type: 'input',
            message: "are there any contributing guidelines",
            name: 'contributing',
        },
        {
            type: 'input',
            message: "how do you test your file",
            name: 'tests',
        },
        {
            type: 'input',
            message: "what is your git Hub username",
            name: 'gitHub',
        },
        {
            type: 'input',
            message: "What is you email",
            name: 'email',
        },
    ]);
};

// // TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init = () => {
    questions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();