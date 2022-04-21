const grades = [10,9,8,7,6]

const updatedGrades = grades.map(grade => grade == 10 ? grade : ++grade)

const updatedGrades2 = grades.map(grade => grade == 10 ? grade : grade++) // this way is wrong

console.log(updatedGrades)
console.log(updatedGrades2)