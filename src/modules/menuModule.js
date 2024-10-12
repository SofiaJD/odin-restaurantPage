//Menu module: 

import imgPlatillos from '../img/Platillos.png'; 
import imgBebidas from '../img/Bebidas.png';
import imgPostres from '../img/Postres.png';

function createMenuSection()
{
    const contentDiv = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');
    menuDiv.setAttribute('class', 'section');

    const h2 = document.createElement('h2');
    h2.innerText = 'Menu';
    h2.setAttribute('class', 'title');
    menuDiv.appendChild(h2);

    const itemsDiv = document.createElement('div');
    itemsDiv.setAttribute('id', 'items');

    const menuItemDiv1 = document.createElement('div');
    menuItemDiv1.setAttribute('class', 'menuItem');

    const platillosImg = document.createElement('img');
    platillosImg.setAttribute('src', imgPlatillos);
    menuItemDiv1.appendChild(platillosImg);

    const btnPlatillos = document.createElement('button');
    btnPlatillos.innerText = 'Dishes';

    const spanPlatillos = document.createElement('span');
    spanPlatillos.setAttribute('class', 'material-symbols-outlined row');
    spanPlatillos.innerText = 'chevron_right';
    btnPlatillos.appendChild(spanPlatillos);

    menuItemDiv1.appendChild(btnPlatillos);


    const menuItemDiv2 = document.createElement('div');
    menuItemDiv2.setAttribute('class', 'menuItem');

    const bebidasImg = document.createElement('img');
    bebidasImg.setAttribute('src', imgBebidas);
    menuItemDiv2.appendChild(bebidasImg);

    const btnBebidas = document.createElement('button');
    btnBebidas.innerText = 'Drinks';

    const spanBebidas = document.createElement('span');
    spanBebidas.setAttribute('class', 'material-symbols-outlined row');
    spanBebidas.innerText = 'chevron_right';
    btnBebidas.appendChild(spanBebidas);

    menuItemDiv2.appendChild(btnBebidas);


    const menuItemDiv3 = document.createElement('div');
    menuItemDiv3.setAttribute('class', 'menuItem');

    const postresImg = document.createElement('img');
    postresImg.setAttribute('src', imgPostres);
    menuItemDiv3.appendChild(postresImg);

    const btnPostres = document.createElement('button');
    btnPostres.innerText = 'Dishes';

    const spanPostres = document.createElement('span');
    spanPostres.setAttribute('class', 'material-symbols-outlined row');
    spanPostres.innerText = 'chevron_right';
    btnPostres.appendChild(spanPostres);

    menuItemDiv3.appendChild(btnPostres);


    itemsDiv.appendChild(menuItemDiv1);
    itemsDiv.appendChild(menuItemDiv2);
    itemsDiv.appendChild(menuItemDiv3);

    menuDiv.appendChild(itemsDiv);

    contentDiv.appendChild(menuDiv);
}

export default createMenuSection;