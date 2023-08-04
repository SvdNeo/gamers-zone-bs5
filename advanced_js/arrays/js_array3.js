const programmingLanguages = [
    {
        name: 'Java',
        paradigm: 'Object-oriented, imperative',
        libraries: [
            { name: 'Spring', type: 'Framework' },
            { name: 'Hibernate', type: 'ORM' },
            { name: 'JUnit', type: 'Testing' }
        ]
    },
    {
        name: 'Python',
        paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
        libraries: [
            { name: 'Django', type: 'Web Framework' },
            { name: 'NumPy', type: 'Numerical Computing' },
            { name: 'Flask', type: 'Web Framework' }
        ]
    },
    {
        name: 'JavaScript',
        paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
        libraries: [
            { name: 'React', type: 'UI Library' },
            { name: 'Node.js', type: 'Runtime Environment' },
            { name: 'Express.js', type: 'Web Framework' }
        ]
    }
];

// Accessing specific language's details
console.log(programmingLanguages[0]);  // Java
console.log(programmingLanguages[1]);  // Python
console.log(programmingLanguages[2]);  // JavaScript
