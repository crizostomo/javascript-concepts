const roomJS = [7,8,8,6.5,3.3,8,10,9]
const roomJava = [9,9.8,5,10,8.3,4.8]
const roomPython = [7,9,10,8.5,6]

function roomAverage(gradeRoom){
    const gradesSum = gradeRoom.reduce((avg, current) => current + avg, 0)
    return gradesSum/gradeRoom.length
}

console.log(`The JS room average is ${roomAverage(roomJS)}`)
console.log(`The Java room average is ${roomAverage(roomJava)}`)
console.log(`The Python room average is ${roomAverage(roomPython)}`)

const grades = [10,6.5,8,7]

const average = grades.reduce((avg, current) => current + avg, 0)/grades.length

console.log(average)