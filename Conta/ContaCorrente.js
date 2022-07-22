//toda vez que um arquivo for nomeado com a primeira letra maiúscula é porque esse arquivo representa uma classe. 

import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; 
    }
//sobrescrevendo o comportamento de sacar:
    sacar(valor){
        let taxa =  1.1;
        return this._sacar(valor, taxa);
    }
}

