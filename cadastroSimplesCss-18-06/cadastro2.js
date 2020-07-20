"use strict";


    //1 ETAPA
//pegando a classe do botao novo que ta no INDEX
const $novo = document.getElementById('novo');
//pegando a classe do botão fechar que ta no INDEX
const $fechar = document.getElementById('fechar');

    //3 ETAPA 
//o que a função ira fazer? Ao clicar nos botão ira chamar o click que ira abrir fechar ou salvar a modal
const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');
const salvarAluno = () => {
    
    fecharModal();
};

    const dataLoad = ( data ) => {
        const $registros = document.getElementById('registros');
        const $tr = document.createElement('tr');
        
        $tr.innerHTML = 'Senai';
        
        $registros.appendChild($tr);
    }
    
    dataLoad(registros);   


    //2 ETAPA 
//criando os evendo de click para abrir e fechar modal
$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
