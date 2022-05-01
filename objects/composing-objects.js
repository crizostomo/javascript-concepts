const clientObjet = {
    name:"John",
    age:36,
    cpf:"123456789",
    email: "andre@email.comn",
    phones: ["11111111", "22222222"]
}

clientObjet.dependent = {
    name:"Sara",
    relationship:"daughter",
    birthDate:"20/01/2000"
}

console.log(clientObjet)

clientObjet.dependent.name = "Zoe"

console.log(clientObjet)