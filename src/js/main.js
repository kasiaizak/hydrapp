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

let counterField = document.querySelector('.glass__value--js');
const addGlass = document.querySelector('.glass__addButton--js');
const removeGlass = document.querySelector('.glass__removeButton--js');
const key = new Date().toISOString().slice(0, 10);

// set counterField to last localstorage key or create new key = 0
if (localStorage.getItem(key)) {
  counterField.innerHTML = parseInt(localStorage.getItem(key));
} else {
  localStorage.setItem(key, 0);
  counterField.innerHTML = 0;
}

addGlass.addEventListener('click', (e) => {
  // localStorage key is a string, it have to be parse to a number
  const counter = parseInt(localStorage.getItem(key));
  localStorage.setItem(key, counter + 1);
  counterField.innerHTML = parseInt(localStorage.getItem(key));
})

removeGlass.addEventListener('click', () => {
  // localStorage key is a string, it have to be parse to a number
  const counter = parseInt(localStorage.getItem(key));
  if (counter > 0) {
    localStorage.setItem(key, counter - 1);
    counterField.innerHTML = parseInt(localStorage.getItem(key));
  }
  else {
    localStorage.setItem(key, 0);
    counterField.innerHTML = 0;
  }
});
