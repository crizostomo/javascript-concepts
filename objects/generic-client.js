function Client(name,cpf,email,balance) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.balance = balance;
    this.deposit = function(value){
        this.balance += value
    }
}

const Diogo = new Client("Diogo", "1111111111", "diogo@email.com", 999)

console.log(Diogo)
console.table(Diogo)