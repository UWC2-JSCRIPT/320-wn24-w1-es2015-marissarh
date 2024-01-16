import people from './people.json';

people((person) => {
  const { email, phone } = person;
  const { name } = person.split(' ');
  const { firstName, lastName } = name;

  console.log(`First name: ${firstName} Last name: ${lastName} Email: ${email} Phone number: ${phone}`);
});
