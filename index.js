// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs/promises')
const path = require('path')

// array of questions for user input
const promptUser = () => { 
    return inquirer.prompt([
    {
      type: 'input',
      message: "What is the project title?",
      name: 'title',
    },
    {
      type: 'list',
      message: "Which license is project using?",
      name: 'license',
      choices: [
        'MIT', 'MPL-2.0', 'GPL-license', 'Apache-2.0', 'No license',
      ]
    },
    {
      type: 'input',
      message: "Give a brief description of the project",
      name: 'description',
    },
    {
        type: 'input',
        message: "Table of contents",
        name: 'contents',
    },
    {
        type: 'input',
        message: "Installation instructions",
        name: 'installation',
      },
    {
        type: 'input',
        message: "Usage of project",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Who was involved in contributing to this project?",
        name: 'contributions',
      },
      {
        type: 'input',
        message: "Are there any guidelines for this project?",
        name: 'guidelines',
      },
      {
        type: 'input',
        message: "Tests?",
        name: 'tests',
      },
      {
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'github',
      },
      {
        type: 'input',
        message: "Enter your email address",
        name: 'email',
      },    
])
}

// function to write README file
function writeToFile(filePath, markdown) {
    
    fs.writeFile(filePath, markdown, 'utf-8')
    .then (() => {
        console.log('README GENERATED!')
    })
    .catch((err) => console.error(err))
}

// function to initialize app
const init = () => {
    promptUser()
    .then((response) => {
      const filePath = path.join(__dirname, 'output', 'README.md') 
      const markdown = generateMarkdown(response)
        writeToFile(filePath, markdown) 
})
}

// Function call to initialize app
init();
