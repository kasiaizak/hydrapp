"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

import browserUpdate from 'browser-update';
browserUpdate({
  required: {e:14,f:-6,o:-6,s:-2,c:-6},
  insecure:true,
  unsupported:true,
  reminder:0,
  reminderClosed: 1
});

const autor = 'Kasia Izak';
console.log(`Hej, nazywam się ${autor} i jestem autorką tej aplikacji.
Fajnie, że nie boisz się zaglądać do konsoli! ;-)`);


const counterField = document.querySelector('.glass__value--js');
const addGlass = document.querySelector('.glass__buttonAdd--js');
const removeGlass = document.querySelector('.glass__actions--remove-js');
const viewHistory = document.querySelector('.glass__actions--history-js');
const history = document.querySelector('.glass__history--js');
const key = new Date().toLocaleDateString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  counterField.innerHTML = 0;
} else {
  counterField.innerHTML = localStorage.getItem(key);
}

addGlass.addEventListener('click', () => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 1);
    counterField.innerHTML = 1;
  } else {
    const counter = parseInt(localStorage.getItem(key));
    localStorage.setItem(key, counter + 1);
    counterField.innerHTML = parseInt(localStorage.getItem(key));
  }
})

removeGlass.addEventListener('click', () => {
  const counter = parseInt(localStorage.getItem(key));
  if (counter > 0) {
    localStorage.setItem(key, counter - 1);
    counterField.innerHTML = localStorage.getItem(key);
  }
});

viewHistory.addEventListener('click', () => {
  history.classList.toggle('glass__history--view');
  if (history.classList.contains('glass__history--view')) {
    viewHistory.innerHTML = 'ukryj historię';
    history.innerHTML = '<ul class="glass__history--list-js"></ul><div class="glass__history--container"><button class="glass__history--clear glass__history--clear-js">wyczyść historię</button></div>';
    for (let i = 0; i < localStorage.length; i++) {
      const historyList = document.querySelector('.glass__history--list-js');
      const date = localStorage.key(i);
      const counter = localStorage.getItem(date);
      historyList.innerHTML += `<li>Dzień: <strong>${date}</strong>, wypitych szklanek: <strong>${counter}</strong></li>`;
    }
    const clearHistory = document.querySelector('.glass__history--clear-js');
    clearHistory.addEventListener('click', () => {
      localStorage.clear();
      counterField.innerHTML = 0;
      history.classList.toggle('glass__history--view');
      viewHistory.innerHTML = 'zobacz historię';
    });
  } else {
    viewHistory.innerHTML = 'zobacz historię';
    history.removeChild();
  }
});
