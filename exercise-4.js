const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

const fetchPersonById = (id) =>
  new Promise((resolve) => {
    let person = persons.find((person) => person.id === id);
    if (person) {
      resolve(person);
    }
  });

const fetchJobById = (person) =>
  new Promise((resolve) => {
    let job = jobs.find((job) => job.id == person.id).jobTitle;
    if (job) {
      resolve(`${person.firstName} ${person.lastName}, ${job}`);
    }
  });

fetchPersonById(1)
  .then((person) => fetchJobById(person))
  .then((result) => console.log(result));

/* console.log(`${person.firstName} ${person.lastName}, ${fetchJobById(person)}`); */
