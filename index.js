const { prompts } = require('inquirer');
const inquirer = require('inquirer');

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
  ]);
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
      return console.log('Exit');
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
  ]);
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
  ]);
}

promptManager();