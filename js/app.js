'use strict';
const liLinkDaily = document.querySelector('.box-person-links__item:nth-child(1)')
const liLinkWeekly = document.querySelector('.box-person-links__item:nth-child(2)');
const liLinkMonthly = document.querySelector('.box-person-links__item:nth-child(3)');
const hoursItems = document.querySelectorAll('.box-wrok-container__content:nth-child(2)');
const main = function(){
    const daily = function(){
      
        console.log('ok');
    }
    const weekly = function(){
        
        console.log('good');
    }
    const monthly = function(){
        
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


