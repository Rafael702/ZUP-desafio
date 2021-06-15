const imagem = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');
const nomePersonagem = document.querySelector('#nomePersonagem1');
const nomePersonagem2 = document.querySelector('#nomePersonagem2');
const nomePersonagem3 = document.querySelector('#nomePersonagem3');
const nomePersonagem4 = document.querySelector('#nomePersonagem4');

const btn = document.querySelector('#recarregar');
let mostraNomePersonagem;

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


trocarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method: 'GET',
    headers: {
        Accept: 'applicatio/json',
        "Content-type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        mostraNomePersonagem = data.name;
        nomePersonagem.innerHTML = `${mostraNomePersonagem}`;
    });
}

trocarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method: 'GET',
    headers: {
        Accept: 'applicatio/json',
        "Content-type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        mostraNomePersonagem = data.name;
        nomePersonagem2.innerHTML = `${mostraNomePersonagem}`;

    });
}

trocarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method: 'GET',
    headers: {
        Accept: 'applicatio/json',
        "Content-type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        mostraNomePersonagem = data.name;
        nomePersonagem3.innerHTML = `${mostraNomePersonagem}`;

    });
}
trocarPersonagem4 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method: 'GET',
    headers: {
        Accept: 'applicatio/json',
        "Content-type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        mostraNomePersonagem = data.name;
        nomePersonagem4.innerHTML = `${mostraNomePersonagem}`;

    });
}



mudarPersonagem = () => {
    trocarPersonagem();
    trocarPersonagem2();
    trocarPersonagem3();
    trocarPersonagem4();
    

}
btn.addEventListener("click", function(){

    location.reload();
    
});


mudarPersonagem();