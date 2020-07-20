"use strict";


const encontrarJogos = async () => {
        const url = `https://api.rawg.io/api/games`;
        const getApi = await fetch(url);
        const api = await getApi.json();
        const array = await api.results;
        for(let i=0; i < 20; i++){
            const id= await array[i];
            var imagem = await id.background_image;
            imagem = '<img class="media" src="'+imagem+'">';
            var nome = await id.name;
            var platformasDisponiveis1 = "";
            var platformasDisponiveis2 = "";
            var platformasDisponiveis3 = "";
            var lancamento = await id.released;


            if(await id.parent_platforms[0]!= null && await id.parent_platforms[0]!= "undefined"){
                var platformasDisponiveis1 = await id.parent_platforms[0].platform.name;
            }

            if(await id.parent_platforms[1]!= null && await id.parent_platforms[1]!= "undefined"){
                var platformasDisponiveis2 = await id.parent_platforms[1].platform.name;
            }

            if(await id.parent_platforms[2]!= null && await id.parent_platforms[2]!= "undefined"){
                var platformasDisponiveis3 = await id.parent_platforms[2].platform.name;
            }
            
            preencherFormulario(imagem, nome, platformasDisponiveis1, platformasDisponiveis2, platformasDisponiveis3, lancamento);
        }
    }
        const preencherFormulario = (imagem, nome, platformasDisponiveis1, platformasDisponiveis2, platformasDisponiveis3, lancamento) => {
            const panel = document.createElement('div');
            panel.innerHTML = `
            <div class="card">
                <div class='media'>
                    ${imagem}
                </div>
                <div class='conteudo'>
                    <p class='nomeJogo'>
                    ${nome}
                    </p>
                </div>
                <div class='conteudo'>
                    <h2 class='negrito'>Plataformas Disponíveis:</h2>
                        ${platformasDisponiveis1}/
                        ${platformasDisponiveis2}/
                        ${platformasDisponiveis3}
                    <h2 class='negrito'>Lançamento:</h2>
                        ${lancamento}
                </div>
            </div>
            `;
        const containerConteudo = document.getElementById('containerConteudo');
        containerConteudo.appendChild(panel);
        }
        
        
encontrarJogos();

const pesquisarjogo = async () => {
    // cria uma const pesquisar e associa ela com o id do input no html para receber o valor digitado na caixa de texto
    const inputgame = document.getElementById('pesquisar').value;
    const url = `https://api.rawg.io/api/games?search=${inputgame}`;
    const getApi = await fetch(url);
    const api = await getApi.json();
    const array = await api.results;
    document.getElementById('containerConteudo').innerHTML="";

    for(let i = 1; i < 20; i++){

        const id = await array[i];
        console.log(id);
        var nome = await id.name;

        var imagem = await id.background_image;
        imagem = '<img class="media" src="'+imagem+'">';

        var platformasDisponiveis = await id.parent_platforms[0].platform.name;
            if(await id.parent_platforms[0]!= null && await id.parent_platforms[0]!= "undefined"){
                var platformasDisponiveis = await id.parent_platforms[0].platform.name;
            }else{
                var platformasDisponiveis = "";
            }
            
        const lancamento = id.released;
        preencherFormulario2(nome, imagem, platformasDisponiveis, lancamento);
    }
}

const preencherFormulario2 = (nome, imagem, platformasDisponiveis, lancamento) => {
    const panel2 = document.createElement('div');
    panel2.innerHTML = `
    <div class="card">
        <div class='media'>
            ${imagem}
        </div>
        <div class='conteudo'>
            <p class='nomeJogo'>
            ${nome}
            </p>
        </div>
        <div class='conteudo'>
            <h2 class='negrito'>Plataformas Disponíveis:</h2>
                ${platformasDisponiveis}
                
            <h2 class='negrito'>Lançamento:</h2>
                ${lancamento}
        </div>
    </div>
    `;
const containerConteudo = document.getElementById('containerConteudo');
containerConteudo.appendChild(panel2);
}

document.getElementById("lupa").addEventListener('click', (evento) => pesquisarjogo());
// 13 é o codigo da tecla enter
document.getElementById("pesquisar").addEventListener('keyup', (evento) => {
    if(evento.keyCode == 13){ 
pesquisarjogo()}
    })