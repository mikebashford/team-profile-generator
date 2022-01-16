const Engineer = require("../lib/Engineer")

test('creates an engineer object', () =>
{
  const engineer = new Engineer('John', '1', 'John@gmail.com', 'john@github.com');

  expect(engineer.name).toBe('John');
  expect(engineer.id).toBe('1');
  expect(engineer.email).toBe('John@gmail.com');
  expect(engineer.github).toBe('john@github.com');
});