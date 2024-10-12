//About module: 

import figuraDecorativa1 from '../img/figuraDecorativa1.png';
import figuraDecorativa2 from '../img/figuraDecorativa2.png';

function createAboutSection()
{
    const contentDiv = document.querySelector('#content');

    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'about');
    aboutDiv.setAttribute('class', 'section');

    const h2 = document.createElement('h2');
    h2.innerText = 'About';
    h2.setAttribute('class', 'title');
    aboutDiv.appendChild(h2);

    const p1 = document.createElement('p');
    p1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutDiv.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    aboutDiv.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerText = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    aboutDiv.appendChild(p3);

    const img1 = document.createElement('img');
    img1.setAttribute('src', figuraDecorativa1);
    img1.setAttribute('class', 'decorativeImage one');
    aboutDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.setAttribute('src', figuraDecorativa2);
    img2.setAttribute('class', 'decorativeImage two');
    aboutDiv.appendChild(img2);

    contentDiv.appendChild(aboutDiv);
}

export default createAboutSection; 