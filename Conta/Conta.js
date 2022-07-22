export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo; 
    }
//Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ 
            this._saldo -= valorSacado;
            return valorSacado; 
        }
        return 0;
    }

    depositar(valor){
//        if(valor <= 0 ){ // a forma mais comum de se encontrar o "early return" é : "if(valor <= 0) return;" -> Perceba que aqui não estamos utilizando as chaves para delimitar o escopo da condicional, já que ele consiste somente na instrução "return".
//            return; //"early return" (ou "retorno antecipado", em tradução livre): consiste em verificarmos todas as situações indesejadas primeiro, simplesmente usaremos a instrução return para pararmos a execução do código.
//        }
        this._saldo += valor; //Dessa maneira, mantemos o código onde a operação realmente é realizada no mesmo nível de indentação da condicional, e conseguimos analisar facilmente que, caso a condição seja verdadeira, sairemos da função sem executá-la. Se todas as verificações passaremos corretamente, o código será executado ao final.
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}