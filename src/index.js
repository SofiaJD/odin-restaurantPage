import './style.css';

import homeModule from './modules/homeModule';
import aboutModule from './modules/aboutModule';
import menuModule from './modules/menuModule';
import bookingModule from './modules/bookingModule';

const divContent = document.querySelector('#content');
const btnHome = document.querySelector('#btnHome');
const btnAbout = document.querySelector('#btnAbout');
const btnMenu = document.querySelector('#btnMenu');
const btnBooking = document.querySelector('#bookingContainer');

homeModule();

btnHome.addEventListener('click', function()
{
    cleanContent();
    homeModule();
});

btnAbout.addEventListener('click', function()
{
    cleanContent();
    aboutModule();
});

btnMenu.addEventListener('click', function()
{
    cleanContent();
    menuModule();
});

btnBooking.addEventListener('click', function()
{
    cleanContent();
    bookingModule();
});



function cleanContent()
{
    divContent.innerHTML = '';
}