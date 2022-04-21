const names = ['Ana', 'Caio', 'Diogo', 'Pedro'];
const grades = [7, 4.5, 8, 7.5]

const failed = names.filter((_, index) => grades[index] < 5)

console.log(`Failed students: ${failed}`)