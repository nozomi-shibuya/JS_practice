'use strict';

{   
    document.querySelector('input').addEventListener('input', () => {
    const pElement = document.querySelector('span');
    const inputElement = document.querySelector('input');
    pElement.textContent = inputElement.value;
  });
}