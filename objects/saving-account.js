function Client(name,cpf,email,balance) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.balance = balance;
    this.deposit = function(value){
        this.balance += value
    }
}

function ClientSaving(name,cpf,email,balance,balanceSav) {
    Client.call(this,name,cpf,email,balance)
    this.balanceSav = balanceSav;
}

const paul = new ClientSaving("paul", "2222222222","paul@email.com",100,200)

console.log(paul)

ClientSaving.prototype.depositSav = function(value){
    this.balanceSav += value
}

paul.depositSav(30)

console.log(paul.balanceSav)