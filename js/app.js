'use strict';
const liLinkDaily = document.querySelector('.box-person-links__item:nth-child(1)')
const liLinkWeekly = document.querySelector('.box-person-links__item:nth-child(2)');
const liLinkMonthly = document.querySelector('.box-person-links__item:nth-child(3)');
const hoursItems = document.querySelectorAll('.box-wrok-container__content:nth-child(2)');
const main = function(){
    const daily = function(){
        liLinkDaily.classList.add('change-link-color');
        liLinkWeekly.classList.remove('change-link-color');
        liLinkMonthly.classList.remove('change-link-color');
        console.log('ok');
    }
    const weekly = function(){
        liLinkWeekly.classList.add('change-link-color'); 
        liLinkDaily.classList.remove('change-link-color');
        liLinkMonthly.classList.remove('change-link-color');
        console.log('good');
    }
    const monthly = function(){
        liLinkMonthly.classList.add('change-link-color'); 
        liLinkDaily.classList.remove('change-link-color');
        liLinkWeekly.classList.remove('change-link-color');
        console.log('great!');
    }
    const eventListeners = function(){
        liLinkDaily.addEventListener('click', daily)
        liLinkWeekly.addEventListener('click', weekly)
        liLinkMonthly.addEventListener('click', monthly)
    }
    eventListeners();
        
}
main();


