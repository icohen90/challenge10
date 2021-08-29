const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const team = [];

const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Manager',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Manager.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the manager email.',
    }, 
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number."

    }
];

const newEngineerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Engineer',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Engineer.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.',
    }, 
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineers GitHub username."

    }
];

const newInternPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the intern',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the intern.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.',
    }, 
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Interns School."

    }
];

const newEmpPrompt = [
    {
        type: "list",
        name: "employeeType",
        message: "Would you like to add an employee?",
        choices: [
            "Add an Engineer.",
            "Add an Intern.",
            new inquirer.Separator(),
            "No, I am done.",
        ],
    },
]

function newEngineer() {
    inquirer.prompt(newEngineerPrompt).then((answers) =>{
        team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    newEmp();
    });
};

function newIntern() {
    inquirer.prompt(newInternPrompt).then((answers) =>{
        team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    newEmp();
    });
};

function makePage(orgData) {
    fs.writeFile('./dist/team.html', generateHTML(orgData), (err) =>   
    err ? console.error(err) : console.log('success!'))
};

function newEmp() {
    inquirer.prompt(newEmpPrompt).then((answers) => {
        switch (answers.employeeType) {
            case "Add an Engineer.":
                newEngineer();
                break;
            case "Add an Intern.":
                newIntern();
                break;
            case "No, I am done.":
                console.log(team);
                makePage(team);
                break;
        };
    })
}

function start() {
    inquirer.prompt(managerPrompt).then((answers) => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(JSON.stringify(team)); 
        newEmp()
    });
}

start();