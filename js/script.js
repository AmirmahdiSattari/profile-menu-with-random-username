'use strict';

const menuItems = document.querySelector('.menu');
const mwnuSqaure = document.querySelector('.square');
const imgProfile = document.querySelector('.profileContiner');
const nameValue =document.querySelector('.nameValue');

imgProfile.addEventListener('click', ()=>{
    let randomName = faker.helpers.createCard().name;
    nameValue.innerHTML = randomName;
    menuItems.classList.toggle('showMenu');
});