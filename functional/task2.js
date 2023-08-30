// 1
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

// 2
const toLowerCase = (text) => text.toLowerCase();
const splitWords = (text) => text.split(' ');
const filterUnique = (arr) => arr.filter((word, index, arr) => arr.indexOf(word) === index);

const filterUniqueWords = (text) =>
  filterUnique(splitWords(toLowerCase(text)));

// 3
const getGrade = ({name, grade}) => grade;
const sumGrades = (students) => students.reduce((acc, student) => acc + getGrade(student), 0);
const getTotalNumberOfStudents = (students) => students.length;
const calculateAverageGrade = (totalGrades, totalStudents) => totalGrades / totalStudents;
  
const getAverageGrade = (students) =>
    calculateAverageGrade(sumGrades(students), getTotalNumberOfStudents(students));
  

  