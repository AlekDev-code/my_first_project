const title = document.querySelector('#main-title');
let isChanged = false;
title.addEventListener('click', function () {
   if (isChanged === false) {
      title.textContent = "Добро пожаловать на мой первый интерактивный сайт!";
      title.style.color = "#00ff7f";
      isChanged = true;
   } else {
      title.textContent = "Привет, я начинающий веб-разработчик";
      title.style.color = "#ff4500";
      isChanged = false;
   }
});
const mySkills = ["HTML5", "CSS3 / Flexbox", "Адаптивная верстка", "JavaScript (DOM)", "Git / GitHub"]
const skillsList = document.querySelector('#skills-list');

mySkills.forEach(function (skill) {
   const newli = document.createElement('li');
   newli.textContent = skill;
   skillsList.appendChild(newli);
});