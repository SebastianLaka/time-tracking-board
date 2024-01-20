"use strict";
const liLinkDaily = document.querySelector(".box-person-links__item:nth-child(1)");
const liLinkWeekly = document.querySelector(".box-person-links__item:nth-child(2)");
const liLinkMonthly = document.querySelector(".box-person-links__item:nth-child(3)");
const cardBox = document.querySelectorAll(".card-box");
const currentHours = document.querySelectorAll(".current-hour");
const previousHours = document.querySelectorAll(".prev-hour");
const dailyTimeFrames = {
  current: [5, 1, 0, 1, 1, 0],
  previous: [7, 2, 1, 1, 3, 1],
};
const weeklyTimeFrames = {
  current: [32, 10, 4, 4, 5, 2],
  previous: [36, 8, 7, 5, 10, 2],
};
const monthlyTimeFrames = {
  current: [103, 23, 13, 11, 21, 7],
  previous: [128, 29, 19, 18, 23, 11],
};
const main = () => {
  liLinkDaily.addEventListener("click", () => {
    currentHours.forEach((currHrs, index) => {
      currHrs.textContent = `${dailyTimeFrames.current[index]} hrs`;
    });
    previousHours.forEach((prevHrs, index) => {
      prevHrs.textContent = `${dailyTimeFrames.previous[index]} hrs`;
    });
  });
  liLinkWeekly.addEventListener("click", () => {
    currentHours.forEach((currHrs, index) => {
      currHrs.textContent = `${weeklyTimeFrames.current[index]} hrs`;
    });
    previousHours.forEach((prevHrs, index) => {
      prevHrs.textContent = `${weeklyTimeFrames.previous[index]} hrs`;
    });
  });
  liLinkMonthly.addEventListener("click", () => {
    currentHours.forEach((currHrs, index) => {
      currHrs.textContent = `${monthlyTimeFrames.current[index]} hrs`;
    });
    previousHours.forEach((prevHrs, index) => {
      prevHrs.textContent = `${monthlyTimeFrames.previous[index]} hrs`;
    });
  });
};
main();
