"use strict";

const encontrarJogos = async () => {
        const url = `https://api.rawg.io/api/games`;
        const getApi = await fetch(url);
        const api = await getApi.json();
        const array = api.results;
        console.log(array[0].parent_platforms[0].platform.name);
        const id0 = array[0];
        const id1 = array[1];
        const id2 = array[2];
        const id3 = array[3];
        const id4 = array[4];
        const id5 = array[5];
        const id6 = array[6];
        const id7 = array[7];
        const id8 = array[8];
        const id9 = array[9];
        const id10 = array[10];
        const id11 = array[11];
        const id12 = array[12];
        const id13 = array[13];
        const id14 = array[14];
        const id15 = array[15];
        const id16 = array[16];
        const id17 = array[17];
        const id18 = array[18];
        const id19 = array[19];
        preencherFormulario(id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13,
            id14, id15, id16, id17, id18, id19);
}

const preencherFormulario = (id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13,
    id14, id15, id16, id17, id18, id19) => {
    const card1 = document.getElementById('1');
    card1.innerHTML = `
    <div class='media'>
        <img class='media' src='${id0.background_image}'>
    </div>
    <div class='conteudo'>
        ${id0.name}
        <div>
            <h2>Plataformas Disponíveis:</h2>
            ${id0.parent_platforms[0].platform.name}/
            ${id0.parent_platforms[1].platform.name}/
            ${id0.parent_platforms[2].platform.name}
        </div>
    </div>`;

    const card2 = document.getElementById('2');
    card2.innerHTML = `
    <div class='media'>
        <img class='media' src='${id1.background_image}'>
    </div>
    <div class='conteudo'>
        ${id1.name}
    </div>`;

    const card3 = document.getElementById('3');
    card3.innerHTML = `
    <div class='media'>
        <img class='media' src='${id2.background_image}'>
    </div>
    <div class='conteudo'>
        ${id2.name}
    </div>`;

    const card4 = document.getElementById('4');
    card4.innerHTML = `
    <div class='media'>
        <img class='media' src='${id3.background_image}'>
    </div>
    <div class='conteudo'>
        ${id3.name}
    </div>`;

    const card5 = document.getElementById('5');
    card5.innerHTML = `
    <div class='media'>
        <img class='media' src='${id4.background_image}'>
    </div>
    <div class='conteudo'>
        ${id4.name}
    </div>`;

    const card6 = document.getElementById('6');
    card6.innerHTML = `
    <div class='media'>
        <img class='media' src='${id5.background_image}'>
    </div>
    <div class='conteudo'>
        ${id5.name}
    </div>`;

    const card7 = document.getElementById('7');
    card7.innerHTML = `
    <div class='media'>
        <img class='media' src='${id6.background_image}'>
    </div>
    <div class='conteudo'>
        ${id6.name}
    </div>`;

    const card8 = document.getElementById('8');
    card8.innerHTML = `
    <div class='media'>
        <img class='media' src='${id7.background_image}'>
    </div>
    <div class='conteudo'>
        ${id7.name}
    </div>`;

    const card9 = document.getElementById('9');
    card9.innerHTML = `
    <div class='media'>
        <img class='media' src='${id8.background_image}'>
    </div>
    <div class='conteudo'>
        ${id8.name}
    </div>`;

    const card10 = document.getElementById('10');
    card10.innerHTML = `
    <div class='media'>
        <img class='media' src='${id9.background_image}'>
    </div>
    <div class='conteudo'>
        ${id9.name}
    </div>`;

    const card11 = document.getElementById('11');
    card11.innerHTML = `
    <div class='media'>
        <img class='media' src='${id10.background_image}'>
    </div>
    <div class='conteudo'>
        ${id10.name}
    </div>`;

    const card12 = document.getElementById('12');
    card12.innerHTML = `
    <div class='media'>
        <img class='media' src='${id11.background_image}'>
    </div>
    <div class='conteudo'>
        ${id11.name}
    </div>`;

    const card13 = document.getElementById('13');
    card13.innerHTML = `
    <div class='media'>
        <img class='media' src='${id12.background_image}'>
    </div>
    <div class='conteudo'>
        ${id12.name}
    </div>`;

    const card14 = document.getElementById('14');
    card14.innerHTML = `
    <div class='media'>
        <img class='media' src='${id13.background_image}'>
    </div>
    <div class='conteudo'>
        ${id13.name}
    </div>`;

    const card15 = document.getElementById('15');
    card15.innerHTML = `
    <div class='media'>
        <img class='media' src='${id14.background_image}'>
    </div>
    <div class='conteudo'>
        ${id14.name}
    </div>`;

    const card16 = document.getElementById('16');
    card16.innerHTML = `
    <div class='media'>
        <img class='media' src='${id15.background_image}'>
    </div>
    <div class='conteudo'>
        ${id15.name}
    </div>`;

    const card17 = document.getElementById('17');
    card17.innerHTML = `
    <div class='media'>
        <img class='media' src='${id16.background_image}'>
    </div>
    <div class='conteudo'>
        ${id16.name}
    </div>`;

    const card18 = document.getElementById('18');
    card18.innerHTML = `
    <div class='media'>
        <img class='media' src='${id17.background_image}'>
    </div>
    <div class='conteudo'>
        ${id17.name}
    </div>`;

    const card19 = document.getElementById('19');
    card19.innerHTML = `
    <div class='media'>
        <img class='media' src='${id18.background_image}'>
    </div>
    <div class='conteudo'>
        ${id18.name}
    </div>`;

    const card20 = document.getElementById('20');
    card20.innerHTML = `
    <div class='media'>
        <img class='media' src='${id19.background_image}'>
    </div>
    <div class='conteudo'>
        ${id19.name}
    </div>`;
}

encontrarJogos();


window.addEventListener('load', function(evento) {
    // console.log("funcionou");
});