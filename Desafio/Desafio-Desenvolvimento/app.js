const imagem = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');



var btn = document.querySelector('#recarregar');

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

