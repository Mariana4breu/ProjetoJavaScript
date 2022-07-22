//toda vez que um arquivo for nomeado com a primeira letra maiúscula é porque esse arquivo representa uma class
export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome,cpf,senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }

}
