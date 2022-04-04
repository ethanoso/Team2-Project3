/*
instrumentquizresult.js
js class for instrument quiz result page, stores instrument item into session for retrieval by instrumentquizresult class.
Class was modified from the following published code: https://github.com/RajnishKatharotiya/share-data-between-html-pages
*/
window.addEventListener('load', () => {

  value1 = sessionStorage.getItem('VALUE1');

  document.getElementById('result-value1').innerHTML = value1;

})
