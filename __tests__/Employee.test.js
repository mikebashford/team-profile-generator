const Employee = require("../lib/Employee")

test('creates an employee object', () =>
{
  const employee = new Employee('Mike', '1', 'mikebashford@gmail.com');

  expect(employee.name).toBe('Mike');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('mikebashford@gmail.com');
});