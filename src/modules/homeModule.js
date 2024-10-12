//Home module: 

// const contentDiv = document.querySelector('#content');

import imagenDecorativa from '../img/ImagenDecorativa.png'

function createHomeSection()
{

    const contentDiv = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'home');

    const div = document.createElement('div');
    homeDiv.appendChild(div);

    const h1 = document.createElement('h1');
    h1.innerText = 'Lorem Ipsum';
    div.appendChild(h1); 

    const p = document.createElement('p');
    p.innerText = 'In eu mi bibendum neque egestas congue quisque egestas diam.';
    div.appendChild(p);

    const image = document.createElement('img');
    image.setAttribute('src', imagenDecorativa);
    homeDiv.appendChild(image);

    contentDiv.appendChild(homeDiv);
}

export default createHomeSection; 