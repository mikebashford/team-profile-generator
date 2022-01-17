const Employee = require("../lib/Employee")
const employee = new Employee('Mike', '1', 'mikebashford@gmail.com');

test('creates an employee object', () =>
{
  expect(employee.name).toBe('Mike');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('mikebashford@gmail.com');
});

test('tests the employees name using the getName() method', () =>
{
  expect(employee.getName()).toBe('Mike');
})

test('tests the employees id using the getId() method', () =>
{
  expect(employee.getId()).toBe('1');
})

test('tests the employees email using the getEmail() method', () =>
{
  expect(employee.getEmail()).toBe('mikebashford@gmail.com');
})

test('tests the employees role using the getRole() method', () =>
{
  expect(employee.getRole()).toBe('Employee');
})