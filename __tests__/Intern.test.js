const Intern = require("../lib/Intern")

test('creates an intern object', () =>
{
  const intern = new Intern('Bob', '3', 'bob@gmail.com', 'Northwestern');

  expect(intern.name).toBe('Bob');
  expect(intern.id).toBe('3');
  expect(intern.email).toBe('bob@gmail.com');
  expect(intern.school).toBe('Northwestern');
})