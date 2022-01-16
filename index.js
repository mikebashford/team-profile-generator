const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];

const promptManager = () =>
{
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number? (Required)',
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    }
  ]).then((answer) =>
  {
    const manager = new Manager(answer.name, answer.id, answer.email, answer.office);
    team.push(manager);
    promptMenu();
  })
}

const promptMenu = () =>
{
  return inquirer.prompt([
    {
      type: 'list',
      name: 'select',
      message: 'What type of employee would you like to add?',
      choices: ['Engineer', 'Intern', 'Finished adding team']
    }
  ])
  .then((answer) =>
  {
    if(answer.select == 'Engineer')
    {
      console.log('Add an new engineer');
      return promptEngineer();
    }
    else if(answer.select == 'Intern')
    {
      console.log('Add an new intern');
      return promptIntern();
    }
    else(answer.select == 'Finished adding team')
    {
      return console.log(team);
    }
  });
}

const promptEngineer = () =>
{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      },
    }
  ]).then((answer) =>
  {
    console.log(answer);
    const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
    team.push(engineer);
    promptMenu();
  })
}

const promptIntern = () =>
{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your schools name? (Required)',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter your schools name!');
          return false;
        }
      },
    }
  ]).then((answer) =>
  {
    console.log(answer);
    const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
    team.push(intern);
    promptMenu();
  })
}

promptManager();