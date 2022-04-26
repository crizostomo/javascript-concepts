const clientObjet = {
    name:"John",
    age:36,
    cpf:"123456789",
    email: "andre@email.comn"
}

const keys = ["name", "age", "cpf", "email"]

console.log(clientObjet[keys[0]])
console.log(clientObjet["name"])

keys.forEach(info=>console.log(clientObjet[info]))