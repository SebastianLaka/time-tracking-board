"use strict";
const liLinkDaily = document.querySelector(
  ".box-person-links__item:nth-child(1)"
);
const liLinkWeekly = document.querySelector(
  ".box-person-links__item:nth-child(2)"
);
const liLinkMonthly = document.querySelector(
  ".box-person-links__item:nth-child(3)"
);
const currentHours = document.querySelectorAll(
  ".box-wrok-container__content:nth-child(2)"
);
const previousHours = document.querySelectorAll(
  ".box-wrok-container__content-hours"
);
// const dailyTimeFrames = {
//         dailyWork: { current: 5, previous: 7},
//         dailyPlay: { current: 1, previous: 2},
//         dailyStudy: { current: 0, previous: 1},
//         dailyExercise: { current: 1, previous: 1},
//         dailySocial: {current: 1, previous: 3},
//         dailySelfCare:{ current: 0, previous: 1},
//     }
// const weeklyTimeFrames = {
//         weeklyWork:{ current: 32, previous: 36},
//         weeklyPlay:{ current: 10,previous: 8},
//         weeklyStudy:{ current: 4, previous: 7},
//         weeklyExercise:{ current: 4, previous: 5},
//         weeklySocial:{ current: 5, previous: 10},
//         weeklySelfCare:{ current: 2, previous: 2},
//     }
//     const monthlyTimeFrames = {
//         monthlyWork:{ current: 103, previous: 128 },
//         monthlyPlay:{ current: 23, previous: 29},
//         monthlyStudy:{ current: 13, previous: 19},
//         monthlyExercise:{ current: 11, previous: 18},
//         monthlySocial:{ current: 21, previous: 23},
//         monthlySelfCare:{ current: 7, previous: 11}
//     }
const dailyTimeFrames = {
  current: {
    dailyWorkCurrent: 5,
    dailyPlayCurrent: 1,
    dailyStudyCurrent: 0,
    dailyExerciseCurrent: 1,
    dailySocialCurrent: 1,
    dailySelfCareCurrent: 0
  },
  previous: {
    dailyWorkPrevious: 7,
    dailyPlayPrevious: 2,
    dailyStudyPrevious: 1,
    dailyExercisePrevious: 1,
    dailySocialPrevious: 3,
    dailySelfCarePrevious: 1
  },
  dailyValues: function(){
    const curr = Object.values(this.current) + ' hrs';
    const prev = Object.values(this.previous) + ' hrs';
    return {curr, prev}
  }
};
const weeklyTimeFrames = {
  current: {
    weeklyWorkCurrent: 32,
    weeklyPlayCurrent: 10,
    weeklyStudyCurrent: 4,
    weeklyExercise: 4,
    weeklySocialCurrent: 5,
    weeklySelfCareCurrent: 2
  },
  previous: {
    weeklyWorkPrevious: 36,
    weeklyPlayPrevious: 8,
    weeklyStudyPrevious: 7,
    weeklyExercisePevious: 5,
    weeklySocialPrevious: 10,
    weeklySelfCarePrevious: 2
  },
  weeklyValues: function(){
    const curr = Object.values(this.current) + ' hrs';
    const prev = Object.values(this.previous) + ' hrs'
    return {curr, prev}
  }
};
const monthlyTimeFrames = {
  current: {
    monthlyWorkCurrent: 103,
    monthlyPlayCurrent: 23,
    monthlyStudyCurrent: 13,
    monthlyExerciseCurrent: 11,
    monthlySocialCurrent: 21,
    monthlySelfCareCurrent: 7
  },
  previous: {
    monthlyWorkPrevious: 128,
    monthlyPlayPrevious: 29,
    monthlyStudyPrevious: 19,
    monthlyExercisePrevious: 18,
    monthlySocialPrevious: 23,
    monthlySelfCarePrevious: 11
  },
  monthlyValues: function(){
    const curr = Object.values(this.current) + ' hrs';
    const prev = Object.values(this.previous) + ' hrs'
    return {curr, prev}
  }
};

const main = function () {
  const daily = function () {
    currentHours.forEach(current => {
        current.textContent = dailyTimeFrames.dailyValues();
    })
    previousHours.forEach(previous => {
       previous.textContent = dailyTimeFrames.dailyValues();
    })
   
    console.log("ok");
  };
  const weekly = function () {
    currentHours.forEach(current => {
        current.textContent = weeklyTimeFrames.weeklyValues();
    })
    previousHours.forEach(previous => {
        previous.textContent = weeklyTimeFrames.weeklyValues();
    })
    console.log("good");
  };
  const monthly = function () {
    currentHours.forEach(current => {
        current.textContent = monthlyTimeFrames.monthlyValues();
    })
    previousHours.forEach(previous => {
        previous.textContent = monthlyTimeFrames.monthlyValues();
    })
    console.log('nice');
  };
  const eventListeners = function () {
    liLinkDaily.addEventListener("click", daily);
    liLinkWeekly.addEventListener("click", weekly);
    liLinkMonthly.addEventListener("click", monthly);
  };
  eventListeners();
};
main();
