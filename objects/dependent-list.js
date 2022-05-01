const clientObjet = {
    name:"John",
    age:36,
    cpf:"123456789",
    email: "andre@email.comn",
    phones: ["11111111", "22222222"],
    dependent: [{
        name:"Sara",
        relationship:"daughter",
        birthDate:"20/01/2000"
    }]
}

clientObjet.dependent.push({
    name: "Sarah",
    relationship: "niece",
    birthDate: "20/01/2014"
})

console.log(clientObjet)

const youngestChild = clientObjet.dependent.filter(dependent => dependent.birthDate === "20/01/2014")

console.log(youngestChild[0].name)