'use strict';
const liLinkDaily = document.querySelector('.box-person-links__item:nth-child(1)')
const liLinkWeekly = document.querySelector('.box-person-links__item:nth-child(2)');
const liLinkMonthly = document.querySelector('.box-person-links__item:nth-child(3)');
const currentHours = document.querySelectorAll('.box-wrok-container__content:nth-child(2)');
const previousHours = document.querySelectorAll('.box-wrok-container__content:last-child');
const timeFrames = {
     dailyFrames: {
        dailyWork: {
            current: 5,
            previous: 7
          },
        dailyPlay: {
            current: 1,
            previous: 2
        },
        dailyStudy: {
            current: 0,
            previous: 1
        },
        dailyExercise:{
            current: 1,
            previous: 1
        },
        dailySocial:{
            current: 1,
            previous: 3
        },
        dailySelfCare:{
            current: 0,
            previous: 1
        }
    },
    weeklyFrames: {
        weeklyWork:{
            current: 32,
            previous: 36
        },
        weeklyPlay:{
            current: 10,
            previous: 8
        },
        weeklyStudy:{
            current: 4,
            previous: 7
        },
        weeklyExercise:{
            current: 4,
            previous: 5
        },
        weeklySocial:{
            current: 5,
            previous: 10
        },
        weeklySelfCare:{
            current: 2,
            previous: 2
        }
    },
    monthlyFrames: {
        monthlyWork:{
            current: 103,
            previous: 128
        },
        monthlyPlay:{
            current: 23,
            previous: 29
        },
        monthlyStudy:{
            current: 13,
            previous: 19
        },
        monthlyExercise:{
            current: 11,
            previous: 18
        },
        monthlySocial:{
            current: 21,
            previous: 23
        },
        monthlySelfCare:{
            current: 7,
            previous: 11
        }
    },
}
console.log(timeFrames);

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


