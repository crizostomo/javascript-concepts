const clients = [
    {
        name:"John",
        age:36,
        cpf:"123456789",
        email: "andre@email.comn",
        phones: ["11111111", "22222222"],
        dependent: [{
            name:"Sara",
            relationship:"daughter",
            birthDate:"20/01/2000"
        },
        {
        name: "Sarah",
        relationship: "niece",
        birthDate: "20/01/2014"
        }]
    },
    {
        name:"Paul",
        age:36,
        cpf:"123456789",
        email: "paul@email.comn",
        phones: ["11111111", "22222222"],
        dependent: [{
            name:"Peter",
            relationship:"son",
            birthDate:"20/01/2001"
        },
        {
        name: "Luke",
        relationship: "nephew",
        birthDate: "20/01/2017"
        }]
    },
]

const listDependents = [...clients[0].dependent,...clients[1].dependent]

console.log(listDependents)

console.table(listDependents)