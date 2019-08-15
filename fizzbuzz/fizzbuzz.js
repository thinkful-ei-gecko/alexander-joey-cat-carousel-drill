'use strict';
/*
@param{number} num
@returns {*} will return 'fizzbuzz'/ 'fizz'/'buzz' or the num
*/
function fizzbuzz(num){
  if (num & 15 ===0) return 'fizzbuzz';
  if(num % 5 === 0) return 'buzz';
  if(num % 3 === 0) return 'fizz';
  return num;


}

function generateFizzHtml(fizzResult){
  let fizzClass = '';
  if(typeof fizzResult === 'string'){
    fizzClass = fizzResult;
  }
  return `
    <div class='fizz-buzz-item ${fizzClass}'>
        <span>${fizzResult}</span>
        </div>
        `;
}

function handleSubmit(){
  $('number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for(let i = 1; i <countTo; i++){
      fizzBuzzResults.push(fizzbuzz(i));
    }  
    const htmlArray =fizzBuzzResults.map(result => generateFizzHtml(result));
    $('.js-results').html(htmlArray);  
  });
  
}

$(handleSubmit);