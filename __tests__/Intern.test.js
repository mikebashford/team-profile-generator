const Intern = require("../lib/Intern")
const intern = new Intern('Bob', '3', 'bob@gmail.com', 'Northwestern');

test('creates an intern object', () =>
{
  expect(intern.name).toBe('Bob');
  expect(intern.id).toBe('3');
  expect(intern.email).toBe('bob@gmail.com');
  expect(intern.school).toBe('Northwestern');
})

test('tests the employees name using the getName() method', () =>
{
  expect(intern.getName()).toBe('Bob');
})

test('tests the interns id using the getId() method', () =>
{
  expect(intern.getId()).toBe('3');
})

test('tests the interns email using the getEmail() method', () =>
{
  expect(intern.getEmail()).toBe('bob@gmail.com');
})

test('tests the interns school using the getSchool() method', () =>
{
  expect(intern.getSchool()).toBe('Northwestern');
})

test('tests the interns role using the getRole() method', () =>
{
  expect(intern.getRole()).toBe('Intern');
})