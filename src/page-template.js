const generateTeamCards = team =>
{
  const cards = [];
  const generateManager = manager =>
  {
    let managerHTML = `    
    <div class="">
      <div class="card">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4><i class="fas fa-mug-hot"></i> Manager</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
    </div>
    `;
    cards.push(managerHTML);
  }

  const generateEngineer = engineer =>
  {
    let engineerHTML = `    
    <div class="">
      <div class="card">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4><i class="fas fa-glasses"></i> Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
    </div>
    `;
    cards.push(engineerHTML);
  }

  const generateIntern = intern =>
  {
    internHTML = `    
    <div class="">
      <div class="card">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4><i class="fas fa-user-graduate"></i> Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="list-group-item">School: ${intern.school}</p>
          </div>
      </div>
    </div>
    `;
    cards.push(internHTML); 
  }

  for( i = 0; i < team.length; i++)
  {
    if( team[i].getRole() === 'Manager')
    {
      generateManager(team[i]);
    }
    if( team[i].getRole() === 'Engineer')
    {
      generateEngineer(team[i]);
    }
    if( team[i].getRole() === 'Intern')
    {
      generateIntern(team[i]);
    }
  }
  return cards.join('');
}

module.exports = team =>
{
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Build My Team Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
        <div class="container">
          <h1 class="">My Team</h1>
        </div>
      </header>
      <main>
          <div class="container">
              <div class="">
                  ${generateTeamCards(team)}
              </div>
          </div>
      </main>
  </body>
  </html>
  `
}