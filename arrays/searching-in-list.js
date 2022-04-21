const students = ['Fulano', 'Ciclano', 'Beltrano', 'Cigano']

const studentsAverage = [10,7,9,6]

let studentsAndAverageList = [students, studentsAverage]

const showNameGrade = (studentName) => {
    if (studentsAndAverageList[0].includes(studentName)) {
        index = studentsAndAverageList[0].indexOf(studentName)
        return studentsAndAverageList[0][index] + ' ,your average is ' + studentsAndAverageList[1][index]
    } else {
        return 'The student is not enrolled in this course'
    }
}

console.log(showNameGrade(students[0]))

console.log(showNameGrade("Ciclano"))