class ClientModel {
    constructor(name,cpf,email,balance) {
        this.name = name
        this.cpf = cpf
        this.email = email
        this.balance = balance
        }
    deposit(value){
        this.balance += value
    }
    showBalance(){
        console.log(this.balance)
    }
}

class ClientSaving extends ClientModel{
    constructor(name,email,cpf,balance,balanceSaving){
        super(name,email,cpf,balance)
        this.balanceSaving = balanceSaving
    }
    depositSaving(value){
        this.balanceSaving += value
    }
}

const diogo = new ClientSaving("Diogo", "diogo@email.com", "111111111",100,200)

console.table(diogo)

diogo.deposit(75)
diogo.depositSaving(25)

console.table(diogo)