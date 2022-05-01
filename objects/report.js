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
    },
        {
            name: "Sarah",
            relationship: "niece",
            birthDate: "20/01/2014"
        }
    ],
    balance: 100,
    deposit: function(value){
        this.balance += value
    }
}

let report="";

for(let info in clientObjet){
    if(typeof clientObjet[info] === "object" || typeof clientObjet[info] === "function"){
        continue
    } else {
        report += `${info} -> ${clientObjet[info]}
        `
    }
}

console.log(report)