'use strict';

{
  
  document.querySelector('input').addEventListener('input', () => {
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    pElement.textContent = inputElement.value;
  });

  document.querySelector('input').addEventListener('blur', () => {
    document.querySelector('p').textContent = '';
  });

  document.querySelector('input').focus();
}