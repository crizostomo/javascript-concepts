const grades = [10, 6.5, 3.3, 5]

let gradesSum = 0

//callback
grades.forEach( grade => {
    gradesSum += grade
})

let average = gradesSum/ grades.length

console.log(average)