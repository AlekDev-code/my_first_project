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
let clickCount = 0;
const cockpitImg = document.querySelector('.image-bg-wrapper img');
const counterText = document.querySelector('#click-counter');
cockpitImg.addEventListener('click', function () {
   clickCount = clickCount + 1;
   counterText.textContent = "Вы кликнули на кокпит: " + clickCount + " раз";
});
const contactBtn = document.querySelector('#contact-btn');
const emailDisplay = document.querySelector('#email-display');
contactBtn.addEventListener('click', function () {
   if (emailDisplay.style.display == 'none') {
      emailDisplay.style.display = 'block';
   } else {
      emailDisplay.style.display = 'none';
   }
});
const themeToggleBtn = document.querySelector('#theme-toggle');
themeToggleBtn.addEventListener('click', function () {
   document.body.classList.toggle('light-theme');
   if (document.body.classList.contains('light-theme')) {
      themeToggleBtn.textContent = 'Темная тема';
   } else {
      themeToggleBtn.textContent = 'Светлая тема';
   }
});