import people from './people.json';

people((person) => {
  const { email, phone } = person;
  const { name } = person.split(' ');
  const firstName = name[0];
  const lastName = name[1];

  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}`);
});
