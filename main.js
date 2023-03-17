let SHEET_ID ='1MYUl7GENBhUYva3_VQI-ZERgSgiOxiNsrTUNe9ekUMA'
let SHEET_TITLE = 'Javascript';
let SHEET_RANGE = '1:1001'

let base = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID +'/gviz/tq?sheet=' +SHEET_TITLE +'&range=' + SHEET_RANGE);

fetch(base)
const output = document.querySelector('.output');
const query = encodeURIComponent('Select A,B,C,D,E,F,G,H,I,J,K,L,M');

const form = document.forms['submit-to-google-sheet']

  form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })