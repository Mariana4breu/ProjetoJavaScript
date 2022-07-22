import {Cliente} from "./Cliente.js";
//import {ContaCorrente} from "./Conta/ContaCorrente.js";
//import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
//import {ContaSalario} from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123456");
const cliente = new Cliente("Lais", 12345678902, "1234");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

//const cliente1 = new Cliente("Mariana", 11122233309);
//const contaCorrenteMariana = new ContaCorrente(cliente1, 1001);
//const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const   contaSalario = new ContaSalario(cliente1);


