"use strict";

//usando as div do index.html
const $nome = document.getElementById('inputNome');
const $adicionar = document.getElementById('btnAdicionar');
const $atualizar = document.getElementById('btnAtualizar');
const $excluir = document.getElementById('btnExcluir');

//string -> array = exibe na div
function mostrarConteudo() {

    const $caixaNome = document.getElementById("exibirNome");
    $caixaNome.innerHTML = "";

    JSON.parse(localStorage.getItem("nome")).forEach(elemento => {
        $caixaNome.innerHTML += `<div>${elemento}</div>`    
    });
}

//Adiciona nomes em array 
function addStorage (nome) {

    let arrayNomes = [];

    if (localStorage.getItem('nome') != null) {
        arrayNomes = JSON.parse(localStorage.getItem('nome'));
    }
    
    arrayNomes.push(nome);
    
    let arrayNomeString = JSON.stringify(arrayNomes);
    localStorage.setItem ('nome', arrayNomeString);

    mostrarConteudo();
}

//function de deleta 
function delStorage(nome) {
    let arrayNomes = JSON.parse(localStorage.getItem('nome'));
    let nomeExiste = false;

    arrayNomes.forEach((elemento) => nomeExiste = (elemento == nome) ? true : false );

    if (!nomeExiste) {
        alert("Nome não encontrado");
    }

    arrayNomes = arrayNomes.filter((elemento) => elemento != nome);

    let arrayNomeString = JSON.stringify(arrayNomes);
    localStorage.setItem ('nome', arrayNomeString);

    mostrarConteudo();
}

//functio de atualiza
function attStorage () {
    const nome = prompt("Qual nome você deseja atualizar?");

    let arrayNomes = JSON.parse(localStorage.getItem("nome"));

    let arrayNomesSelecionado = arrayNomes.filter((elemento) => {
        if (nome == elemento) {
            return elemento;
        }
    });

    if (arrayNomesSelecionado.length != 0) {
        let novoNome = prompt(`Qual o novo nome para ${arrayNomesSelecionado[0]}?`);

        arrayNomes = arrayNomes.map((elemento) => {

            if (nome == elemento) {
                elemento = novoNome;
            }

            return elemento;
        });

        let arrayNomeString = JSON.stringify(arrayNomes);
        localStorage.setItem ('nome', arrayNomeString);

        mostrarConteudo();
    } else {
        alert("Nome não encontrado");

    }
}


$adicionar.addEventListener('click', () => addStorage($nome.value));
$atualizar.addEventListener('click', () => attStorage());
$excluir.addEventListener('click', () => delStorage($nome.value));

mostrarConteudo();