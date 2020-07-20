"use strict";

//import { validator, emailValidator } from "./mask.js";

    //1 ETAPA
//pegando a classe do botao novo que ta no INDEX
const $novo = document.getElementById('novo');
//pegando a classe do botão fechar que ta no INDEX
const $fechar = document.getElementById('fechar');
//pegando a classe do botão salvar que ta no INDEX
const $salvar = document.getElementById('salvar');
const $campos = document.querySelectorAll('.form > input');

    //3 ETAPA 
//o que a função ira fazer? Ao clicar nos botão ira chamar o click que ira abrir fechar ou salvar a modal
const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');
const salvarAluno = () => {
    
    fecharModal();
};

//validator(document.getElementById('form'));
//emailValidator(document.getElementById('email'));


const loadTable = (data) => {
    const $registros = document.getElementById('registros');
    
    data.forEach( element =>{
        const $tr = document.createElement('tr');
        $tr.innerHTML = `
        <td>${element.codigo}</td>
        <td>${element.aluno}</td>
        <td>${element.email}</td>
        <td>${element.celular}</td>
        <td>${element.cidade}</td>
        <td>
            <button id=editar-${element.codigo}>editar</button>
            <button id=excluir-${element.codigo}>excluir</button>
        </td>
`;
        $registros.appendChild($tr);
    });
};

const getAlunos = async url => {
    const response = await fetch (url);
    const json = await response.json();
    return json.data;
//    console.log (json.data);
}

const showAlunos = async () =>{
    const alunos = await getAlunos ('http://localhost/senai/Senai/Leonid%20-%20Front/apiphp-master/alunos/');
//    console.log (alunos);
    
    const produtos ={
        
    }
    
    
    const formatAlunos = alunos.map (  ({id:codigo, nome:aluno, email, celular, cidade})  => 
                                        ({codigo, aluno, email, celular, cidade}) );
    loadTable(formatAlunos);
}
showAlunos ();



    //2 ETAPA 
//criando os evendo de click para abrir e fechar modal
$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);







