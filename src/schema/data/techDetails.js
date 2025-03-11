const jobRole = {
  "Web Developer": ["Front-end", "Back-end", "Full-stack"],
  "Mobile Developer": ["IOS", "Android", "Flux"],
  "Cyber Security": ["Ethical Hacking", "Penetrate Testing"],
  "Data Scientist": ["Machine Learning", "Deep Learning"],
};

// TODO: Correct the logic to --> select the title and specialty according to title
const jobTitle = Object.keys(jobRole);
const jobSpecialty = Object.values(jobRole);

const programmingLanguage = [
  "C language",
  "C++",
  "Java",
  "Python",
  "C#",
  "C-sharp",
  "JavaScript",
  "TypeScript",
];

const topics = [
  "Data Structure",
  "Algorithms",
  "DBMS",
  "Operating System",
  "SQL",
  "NoSQL",
  "React",
  "NodeJS",
  "MongoDB",
  "Spring",
];

const relationshipInterest = [
  "Only to explore",
  "Find coding partner",
  "Find coding team",
  "Still figuring out",
];

module.exports = {
  jobTitle,
  jobSpecialty,
  programmingLanguage,
  topics,
  relationshipInterest,
};
